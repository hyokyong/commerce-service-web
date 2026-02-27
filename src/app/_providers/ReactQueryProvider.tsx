"use client";

import type { ReactNode } from "react";

type ReactQueryProviderProps = {
  children: ReactNode;
};

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return children;
}

