import Link from "next/link";

export default function AccountPage() {
  return (
    <main className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold tracking-tight">내 계정</h1>
      <p className="text-sm text-slate-600">
        Placeholder 페이지입니다. 추후 주문/프로필/주소록 등을 추가하세요.
      </p>
      <div className="mt-2 text-sm">
        <Link href="/login" className="text-blue-600 hover:underline">
          로그인
        </Link>
      </div>
    </main>
  );
}

