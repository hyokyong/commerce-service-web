type ProductDetailPageProps = {
  params: Promise<{ productId: string }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { productId } = await params;

  return (
    <main className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold tracking-tight">상품 상세</h1>
      <p className="text-sm text-slate-600">
        Placeholder 페이지입니다. productId:{" "}
        <span className="font-mono text-slate-900">{productId}</span>
      </p>
    </main>
  );
}

