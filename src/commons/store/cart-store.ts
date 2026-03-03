import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProductStatus = "visible" | "hidden" | "sold_out";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string | null;
  salePrice: number | null;
  status?: ProductStatus;
};

export type CartProductInput = Omit<CartItem, "quantity">;

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
  addItem: (product: CartProductInput, quantity?: number) => void;
  updateItemQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

function safeQuantity(value: number | undefined): number {
  const q = typeof value === "number" ? value : 1;
  if (!Number.isFinite(q)) return 1;
  return Math.max(1, Math.floor(q));
}

function computeTotals(items: CartItem[]) {
  const totalQuantity = items.reduce((sum, it) => sum + it.quantity, 0);
  const totalAmount = items.reduce((sum, it) => {
    const unit = typeof it.salePrice === "number" ? it.salePrice : it.price;
    return sum + unit * it.quantity;
  }, 0);

  return { totalQuantity, totalAmount };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalQuantity: 0,
      totalAmount: 0,

      // 장바구니에 아이템을 추가합니다. 이미 있으면 수량만 증가합니다.
      addItem(product, quantity) {
        try {
          const q = safeQuantity(quantity);
          const { items } = get();

          const existing = items.find((it) => it.id === product.id);
          const nextItems = existing
            ? items.map((it) =>
                it.id === product.id ? { ...it, quantity: it.quantity + q } : it,
              )
            : [...items, { ...product, quantity: q }];

          const totals = computeTotals(nextItems);
          set({ items: nextItems, ...totals });
        } catch {
          // 런타임 오류 발생 시에도 앱이 깨지지 않도록 무시합니다.
        }
      },

      // 아이템 수량을 변경합니다. 0 이하이면 해당 아이템을 제거합니다.
      updateItemQuantity(productId, quantity) {
        try {
          if (typeof productId !== "string" || productId.length === 0) return;
          if (typeof quantity !== "number" || !Number.isFinite(quantity)) return;

          const nextQuantity = Math.floor(quantity);
          const { items } = get();

          const nextItems =
            nextQuantity <= 0
              ? items.filter((it) => it.id !== productId)
              : items.map((it) =>
                  it.id === productId ? { ...it, quantity: nextQuantity } : it,
                );

          const totals = computeTotals(nextItems);
          set({ items: nextItems, ...totals });
        } catch {
          // 런타임 오류 발생 시에도 앱이 깨지지 않도록 무시합니다.
        }
      },

      // 특정 아이템을 장바구니에서 제거합니다.
      removeItem(productId) {
        try {
          const { items } = get();
          const nextItems = items.filter((it) => it.id !== productId);
          const totals = computeTotals(nextItems);
          set({ items: nextItems, ...totals });
        } catch {
          // 런타임 오류 발생 시에도 앱이 깨지지 않도록 무시합니다.
        }
      },

      // 장바구니를 비웁니다.
      clear() {
        set({ items: [], totalQuantity: 0, totalAmount: 0 });
      },
    }),
    {
      name: "commerce_cart_v1",
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state, error) => {
        if (error || !state) return;
        const totals = computeTotals(state.items);
        state.totalQuantity = totals.totalQuantity;
        state.totalAmount = totals.totalAmount;
      },
    },
  ),
);

