export type CreateOrderItem = {
  productId: string;
  quantity: number;
  unitPrice: number;
};

export type CreateOrderInput = {
  userId: string;
  items: CreateOrderItem[];
};

export type CreateOrderResult = {
  orderId: string;
};

export function isCreateOrderInput(value: unknown): value is CreateOrderInput {
  if (typeof value !== "object" || value === null) return false;

  const v = value as Record<string, unknown>;

  if (typeof v.userId !== "string") return false;
  if (!Array.isArray(v.items)) return false;

  const isValidItems = v.items.every((item) => {
    if (typeof item !== "object" || item === null) return false;

    const it = item as Record<string, unknown>;

    return (
      typeof it.productId === "string" &&
      typeof it.quantity === "number" &&
      typeof it.unitPrice === "number"
    );
  });

  if (!isValidItems) return false;

  return true;
}

