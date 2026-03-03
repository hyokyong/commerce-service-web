"use client";

import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { QUERY_KEYS } from "@/commons/constants/query-keys";
import type { Product } from "@/components/commerce/types";

export type UseProductsParams = {
  limit?: number;
  search?: string;
};

type ProductsQueryResult = UseQueryResult<Product[]>;

type SupabaseProductRow = {
  id: string;
  name: string;
  price: number;
  sale_price: number | null;
  image_url: string | null;
  status: "registered" | "hidden" | "sold_out";
  rating_average: number | null;
};

async function fetchProducts(params?: UseProductsParams): Promise<Product[]> {
  const supabase = getSupabaseBrowserClient() as any;

  let query = supabase.from("products").select("*").neq("status", "hidden");

  if (params?.limit != null) {
    query = query.limit(params.limit);
  }

  // TODO: search 파라미터 처리 (name LIKE 등)

  const { data, error } = (await query) as {
    data: SupabaseProductRow[] | null;
    error: { message?: string } | null;
  };

  if (error) {
    throw new Error(error.message ?? "상품 목록을 불러오지 못했습니다.");
  }

  if (!data) return [];

  return data.map<Product>((row) => ({
    id: row.id,
    name: row.name,
    price: Number(row.price),
    salePrice: row.sale_price != null ? Number(row.sale_price) : undefined,
    imageUrl: row.image_url ?? "",
    rating:
      row.rating_average != null ? Number(row.rating_average) : undefined,
    reviewCount: undefined,
  }));
}

export function useProductsQuery(params?: UseProductsParams): ProductsQueryResult {
  return useQuery<Product[]>({
    queryKey: QUERY_KEYS.products.list(params ?? {}),
    queryFn: () => fetchProducts(params),
    enabled: true,
  });
}

