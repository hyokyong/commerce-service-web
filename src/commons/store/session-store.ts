import { create } from "zustand";

export type UserRole = "user" | "admin";

export interface UserSession {
  id: string;
  email: string;
  displayName: string | null;
  role: UserRole;
}

export interface SessionState {
  user: UserSession | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  setUser: (user: UserSession) => void;
  clearUser: () => void;
}

export function isUserRole(value: unknown): value is UserRole {
  return value === "user" || value === "admin";
}

export function isUserSession(value: unknown): value is UserSession {
  if (typeof value !== "object" || value === null) return false;

  const v = value as Record<string, unknown>;

  if (typeof v.id !== "string") return false;
  if (typeof v.email !== "string") return false;
  if (v.displayName !== null && typeof v.displayName !== "string") return false;
  if (!isUserRole(v.role)) return false;

  return true;
}

export const useSessionStore = create<SessionState>((set) => ({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  // 유저 정보를 설정하고 인증 상태를 갱신합니다.
  setUser(user) {
    set({
      user,
      isAuthenticated: true,
      isAdmin: user.role === "admin",
    });
  },
  // 유저 정보를 제거하고 인증 상태를 초기화합니다.
  clearUser() {
    set({
      user: null,
      isAuthenticated: false,
      isAdmin: false,
    });
  },
}));


