import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, price, salePrice, imageUrl, rating } = product;

  const hasSale = typeof salePrice === "number" && salePrice < price;
  const discount = hasSale ? Math.round(((price - salePrice!) / price) * 100) : 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative bg-slate-50">
        <Image
          src={imageUrl}
          alt={name}
          width={640}
          height={640}
          className="h-60 w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <button
          type="button"
          className="mb-4 w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Add to cart
        </button>

        <div className="mb-2 flex items-center gap-1 text-xs text-slate-900">
          {"★★★★★".slice(0, Math.max(0, Math.min(5, Math.round(rating))))}
        </div>

        <h3 className="text-sm font-medium text-slate-900">{name}</h3>

        <div className="mt-1 flex items-baseline gap-2 text-sm">
          {hasSale ? (
            <>
              <span className="font-semibold text-slate-900">
                ${salePrice?.toFixed(2)}
              </span>
              <span className="text-xs text-slate-400 line-through">
                ${price.toFixed(2)}
              </span>
              <span className="text-xs font-semibold text-emerald-500">
                {discount}% OFF
              </span>
            </>
          ) : (
            <span className="font-semibold text-slate-900">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export type { Product, ProductCardProps };
