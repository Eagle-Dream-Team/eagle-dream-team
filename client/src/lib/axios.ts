import axios from "axios";
import { toast } from "sonner";

//http client
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isAuthRoute = error.config?.url?.includes("/auth/");
    if (error.response?.status === 401 && !isAuthRoute) {
      toast.error("Your session has expired. Please sign in again.");
      setTimeout(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("role");
        window.location.href = "/auth/sign-in";
      }, 2000);
    }
    return Promise.reject(error);
  },
);

export interface ApiError {
  success: false;
  statusCode: number;
  message: string | string[];
  timestamp: string;
  path: string;
}

export const handleApiError = (
  error: unknown,
  unauthorizedMessage?: string,
): never => {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      if (error.code === "ERR_NETWORK" || error.message === "Network Error") {
        throw new Error(
          "No internet connection. Please check your network and try again.",
        );
      }
      if (error.code === "ECONNABORTED") {
        throw new Error("Request timed out. Please try again.");
      }
      throw new Error(
        "Unable to connect to the server. Please check your connection.",
      );
    }

    const status = error.response?.status;
    const data: ApiError = error.response?.data;

    if (status === 401) {
      throw new Error(
        unauthorizedMessage || "You are not authorized to perform this action",
      );
    }

    if (data?.message) {
      const message = Array.isArray(data.message)
        ? data.message[0]
        : data.message;
      throw new Error(message);
    }
  }

  throw new Error("Something went wrong. Please try again.");
};
export default api;
