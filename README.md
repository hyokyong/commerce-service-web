# My Cursor App — Commerce & Admin

커머스 + 관리자 대시보드가 공존하는 **Next.js 16 App Router** 프로젝트입니다.  
Cursor AI와 Figma(TalkToFigma MCP)로 구조·상태 관리·API·디자인 토큰을 단계적으로 구축했습니다.

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | Next.js 16, React 19, App Router |
| 언어·스타일 | TypeScript 5, Tailwind CSS 4 |
| 상태 관리 | Zustand (장바구니 persist, 세션) |
| 서버·캐시 | TanStack React Query 5 |
| 기타 | React Compiler, Supabase(연동 준비), yarn |

---

## 프로젝트 구조

- **app**: `(auth)` 로그인/회원가입, `(commerce)` 홈·상품·장바구니·결제·계정, `_providers`(React Query)
- **components**: ui, commerce(ProductCard), admin
- **features**: products(useProductsQuery), orders(useCreateOrderMutation)
- **commons**: constants(color, typography, query-keys), store(cart, session), types, utils, prompt(.mdc)
- **lib**: supabase/client, auth

Route Group `(auth)`·`(commerce)` 사용, 동적 라우트 `products/[productId]`.

---

## 주요 기능

- **커머스**: 상품 목록/상세(React Query, mock), ProductCard 그리드, 로딩·에러 UI
- **장바구니**: Zustand + localStorage persist, 추가/수량/삭제/비우기, 총 금액(salePrice 우선)
- **주문**: useCreateOrderMutation — Supabase orders/order_items 연동 준비
- **세션**: session-store (user, isAuthenticated, isAdmin, role)
- **디자인 토큰**: Figma 연동 → color.ts(commerceColors/adminColors), typography.ts

---

## 실행

```bash
yarn install
yarn dev    # http://localhost:3000
yarn build
yarn start
```

Supabase 연동 시: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SECRET_KEY`. 클라이언트는 `lib/supabase/client.ts`에서 구현.

---

## Cursor AI 활용

- **규칙** (`.cursor/rules/`): 공통 가이드(수정 범위, 타입, yarn, 빌드 검증), Git(Conventional Commits·한국어), Supabase 마이그레이션은 TS 스크립트+Management API
- **프롬프트** (`commons/prompt/*.mdc`): Next 구조(1) → 타입(2) → 장바구니 스토어(3) → 세션 스토어(4) → 상품 쿼리(5) → 주문 뮤테이션(6) → Figma 디자인 토큰(7) 순으로 구현 유도
- **TalkToFigma MCP**: 채널 연결 후 `get_styles`로 Color·Text 스타일 추출 → color.ts, typography.ts 생성

---

## 디자인 시스템

Figma Commerce/Admin 템플릿 기반. `commerceColors` / `adminColors`(primary, background, text, border, semantic, neutral), `typography`(Hero, Headline 1–7, Body, Caption, Button XL~XS), Poppins/Inter.

```ts
import { commerceColors } from "@/commons/constants/color";
import { typography, fontFamilyCss } from "@/commons/constants/typography";
```

---

## 컨벤션

- 커밋: Conventional Commits + 한국어 (feat/fix/refactor/docs/test/chore)
- 코드: TypeScript strict, path alias `@/*`, Tailwind

---

**최종 업데이트**: 프로젝트 현재 상태 기준 (Commerce 영역 + Admin 대시보드 골격, Zustand/React Query/Supabase 연동 준비, Figma 디자인 토큰 반영)
