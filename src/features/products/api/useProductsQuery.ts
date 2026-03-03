"use client";

export type ProductListItem = {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
};

type UseProductsQueryResult = {
  data: ProductListItem[] | null;
  isLoading: boolean;
  error: Error | null;
};

export function useProductsQuery(): UseProductsQueryResult {
  return {
    data: null,
    isLoading: false,
    error: null,
  };
}

