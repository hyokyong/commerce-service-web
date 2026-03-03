"use client";

import Link from "next/link";
import { ProductCard } from "@/components/commerce";
import { useProductsQuery } from "@/features/products/api/useProductsQuery";

export default function CommerceHomePage() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProductsQuery({ limit: 12 });

  return (
    <main className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">커머스</h1>
        <p className="text-sm text-slate-600">
          상품을 둘러보고 장바구니에 담아보세요.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-slate-50"
          >
            전체 상품 보기
          </Link>
          <Link
            href="/cart"
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-slate-50"
          >
            장바구니
          </Link>
          <Link
            href="/checkout"
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-slate-50"
          >
            결제
          </Link>
        </div>
      </header>

      {isLoading ? (
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-600">
          상품을 불러오는 중입니다...
        </div>
      ) : isError ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-8 text-center text-sm text-red-700">
          상품을 불러오는 중 오류가 발생했습니다.
          {error?.message ? (
            <div className="mt-2 text-xs text-red-500">{error.message}</div>
          ) : null}
        </div>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(products ?? []).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}

