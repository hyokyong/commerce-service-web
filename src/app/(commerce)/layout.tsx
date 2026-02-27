import Link from "next/link";

export default function CommerceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-semibold tracking-tight text-slate-900">
            Commerce
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <Link href="/products" className="hover:text-slate-900">
              상품
            </Link>
            <Link href="/cart" className="hover:text-slate-900">
              장바구니
            </Link>
            <Link href="/account" className="hover:text-slate-900">
              내 계정
            </Link>
            <Link href="/admin" className="hover:text-slate-900">
              관리자
            </Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
    </div>
  );
}

