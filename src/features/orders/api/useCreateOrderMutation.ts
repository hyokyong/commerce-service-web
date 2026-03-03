"use client";

export type CreateOrderInput = {
  items: Array<{
    productId: string;
    quantity: number;
  }>;
};

type UseCreateOrderMutationResult = {
  mutateAsync: (input: CreateOrderInput) => Promise<{ orderId: string }>;
  isPending: boolean;
  error: Error | null;
};

export function useCreateOrderMutation(): UseCreateOrderMutationResult {
  return {
    async mutateAsync() {
      return { orderId: "placeholder" };
    },
    isPending: false,
    error: null,
  };
}

