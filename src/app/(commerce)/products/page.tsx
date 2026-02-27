import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold tracking-tight">상품 목록</h1>
      <p className="text-sm text-slate-600">
        Placeholder 페이지입니다. 추후 서버에서 상품 리스트를 렌더링하세요.
      </p>

      <div className="mt-2 flex flex-col gap-2 text-sm">
        <Link href="/products/example" className="text-blue-600 hover:underline">
          예시 상품 상세로 이동
        </Link>
      </div>
    </main>
  );
}

