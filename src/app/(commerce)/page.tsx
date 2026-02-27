import Link from "next/link";

export default function CommerceHomePage() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold tracking-tight">커머스</h1>
      <p className="text-sm text-slate-600">
        사용자 영역 홈 Placeholder입니다.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/products"
          className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-slate-50"
        >
          상품 목록
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
    </main>
  );
}

