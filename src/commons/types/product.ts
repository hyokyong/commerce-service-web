export interface ProductCategory {
  id: string;
  name: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  description: string | null;
  price: number;
  salePrice?: number;
  image_url: string | null;
  status: "registered" | "hidden" | "sold_out";
  created_at: string | null;
  updated_at: string | null;
  additional_info?: string | null;
  measurements?: string | null;
  categories?: ProductCategory[] | null;
  rating?: number;
  reviewCount?: number;
}

export function isProductDetail(value: unknown): value is ProductDetail {
  if (typeof value !== "object" || value === null) return false;

  const v = value as Record<string, unknown>;

  const hasBasicFields =
    typeof v.id === "string" &&
    typeof v.name === "string" &&
    typeof v.price === "number" &&
    (v.description === null || typeof v.description === "string") &&
    (v.image_url === null || typeof v.image_url === "string") &&
    (v.created_at === null || typeof v.created_at === "string") &&
    (v.updated_at === null || typeof v.updated_at === "string");

  const hasValidStatus =
    v.status === "registered" || v.status === "hidden" || v.status === "sold_out";

  if (!hasBasicFields || !hasValidStatus) return false;

  if (v.categories != null && !Array.isArray(v.categories)) return false;

  return true;
}

