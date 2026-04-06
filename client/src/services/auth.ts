import api, { handleApiError } from "@/lib/axios";
import { jwtDecode } from "jwt-decode";
import type { SignInDto } from "@server/user/dto/signIn.dto";
import type { SignUpDto } from "@server/user/dto/signUp.dto";
import type { ChangePasswordDto } from "@server/user/dto/changePassword.dto";

export type Role = "student" | "tutor" | "staff";
export interface JwtPayload {
  sub: string;
  email: string;
  role: "student" | "tutor" | "staff";
  first_name: string;
  last_name: string;
}

export interface AuthResponse {
  access_token: string;
  role: string;
}

/* with this */
export async function signIn(payload: SignInDto): Promise<AuthResponse> {
  try {
    const { data } = await api.post<AuthResponse>("/auth/sign-in", payload);
    return data;
  } catch (error) {
    return handleApiError(error, "Invalid email or password");
  }
}
export async function signUp(payload: SignUpDto) {
  const { data } = await api.post("/auth/sign-up", payload);
  return data;
}

export async function signOut() {
  await api.post("/auth/sign-out");
  localStorage.removeItem("access_token");
  localStorage.removeItem("role");
}

export function decodeToken(token: string): JwtPayload {
  return jwtDecode<JwtPayload>(token);
}

export function getToken(): string | null {
  return localStorage.getItem("access_token");
}

export function getUser(): JwtPayload | null {
  const token = localStorage.getItem("access_token");
  if (!token) return null;
  return jwtDecode<JwtPayload>(token);
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("access_token");
}
export function isTokenExpired(): boolean {
  const token = getToken();
  if (!token) return true;
  const { exp } = jwtDecode<JwtPayload & { exp: number }>(token);
  return Date.now() >= exp * 1000;
}

export async function changePassword(
  payload: ChangePasswordDto,
): Promise<void> {
  try {
    await api.post("/auth/change-password", payload);
  } catch (error) {
    return handleApiError(error);
  }
}

export const forgotPassword = (email: string) =>
  api.post("/auth/forgot-password", { email });

export const resetPassword = (token: string, newPassword: string) =>
  api.post("/auth/reset-password", { token, newPassword });
