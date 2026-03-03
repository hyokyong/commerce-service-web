"use client";

import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { QUERY_KEYS } from "@/commons/constants/query-keys";
import type { CreateOrderInput, CreateOrderResult } from "./types";

type UseCreateOrderMutationResult = UseMutationResult<
  CreateOrderResult,
  Error,
  CreateOrderInput
>;

async function createOrder(input: CreateOrderInput): Promise<CreateOrderResult> {
  const supabase = getSupabaseBrowserClient() as any;

  const totalAmount = input.items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  const {
    data: orderData,
    error: orderError,
  } = (await supabase
    .from("orders")
    .insert({
      user_id: input.userId,
      total_amount: totalAmount,
      status: "pending",
      payment_status: "requested",
    })
    .select("id")
    .single()) as {
    data: { id: string } | null;
    error: { message?: string } | null;
  };

  if (orderError || !orderData) {
    throw new Error(orderError?.message ?? "주문 생성에 실패했습니다.");
  }

  const orderId = orderData.id;

  if (input.items.length > 0) {
    const {
      error: itemsError,
    } = (await supabase.from("order_items").insert(
      input.items.map((item) => ({
        order_id: orderId,
        product_id: item.productId,
        quantity: item.quantity,
        unit_price: item.unitPrice,
      })),
    )) as { error: { message?: string } | null };

    if (itemsError) {
      throw new Error(itemsError.message ?? "주문 상품 생성에 실패했습니다.");
    }
  }

  return { orderId };
}

export function useCreateOrderMutation(): UseCreateOrderMutationResult {
  const queryClient = useQueryClient();

  return useMutation<CreateOrderResult, Error, CreateOrderInput>({
    mutationFn: createOrder,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.orders.all,
      });
    },
  });
}

