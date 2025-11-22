import axios, { AxiosError } from "axios";
import { ApiMessage, ApiResponse, ApiError } from "@/types";

// Use Vercel proxy in production, direct API in development
const isProduction = import.meta.env.PROD;
const baseURL = isProduction ? "/api/chat" : import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // Only send auth header in development (proxy handles it in production)
    ...(isProduction
      ? {}
      : { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` }),
  },
  timeout: 30000,
});

export const sendMessage = async (
  messages: ApiMessage[]
): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post<ApiResponse>("", {
      model: import.meta.env.VITE_MODEL,
      messages,
    });

    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ error?: string }>;

    if (axiosError.response) {
      return {
        message: `خطای سرور: ${axiosError.response.status} - ${
          axiosError.response.data?.error || "خطای ناشناخته"
        }`,
        status: axiosError.response.status,
      };
    }

    if (axiosError.request) {
      return {
        message:
          "عدم دریافت پاسخ از سرور. لطفاً اتصال اینترنت خود را بررسی کنید.",
      };
    }
  }

  return {
    message: error instanceof Error ? error.message : "خطای ناشناخته",
  };
};
