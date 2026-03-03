"use client";

import type { CreateOrderInput, CreateOrderResult } from "./types";

type UseCreateOrderMutationResult = {
  mutateAsync: (input: CreateOrderInput) => Promise<CreateOrderResult>;
  isPending: boolean;
  error: Error | null;
};

export function useCreateOrderMutation(): UseCreateOrderMutationResult {
  return {
    async mutateAsync(): Promise<CreateOrderResult> {
      return { orderId: "placeholder" };
    },
    isPending: false,
    error: null,
  };
}

