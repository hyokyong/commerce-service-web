"use client";

import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/commons/constants/query-keys";
import type { Product } from "@/components/commerce/types";

export type UseProductsParams = {
  limit?: number;
  search?: string;
};

type ProductsQueryResult = UseQueryResult<Product[]>;

async function fetchProducts(params?: UseProductsParams): Promise<Product[]> {
  const mock: Product[] = [
    {
      id: "p-1",
      name: "Mock T‑Shirt",
      price: 29000,
      salePrice: 19000,
      imageUrl:
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.jpeg",
      rating: 4.5,
      reviewCount: 12,
    },
    {
      id: "p-2",
      name: "Mock Sneakers",
      price: 79000,
      imageUrl:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      rating: 4.8,
      reviewCount: 34,
    },
    {
      id: "p-3",
      name: "Mock Backpack",
      price: 59000,
      salePrice: 49000,
      imageUrl:
        "https://images.pexels.com/photos/374679/pexels-photo-374679.jpeg",
      rating: 4.2,
      reviewCount: 7,
    },
  ];

  const limited = params?.limit ? mock.slice(0, params.limit) : mock;

  return Promise.resolve(limited);
}

export function useProductsQuery(params?: UseProductsParams): ProductsQueryResult {
  return useQuery<Product[]>({
    queryKey: QUERY_KEYS.products.list(params ?? {}),
    queryFn: () => fetchProducts(params),
    enabled: true,
  });
}

