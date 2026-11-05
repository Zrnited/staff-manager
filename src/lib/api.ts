import axios, { AxiosError } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export type ApiError = {
  status?: number;
  message: string;
  errors?: Record<string, string[]>;
};

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError<any>) => {
    const status = error.response?.status;
    const data = error.response?.data;
    const url = error.config?.url ?? "";

    const isAuthCheck =
      url.includes("/users/signin") || url.includes("/users/whoami");
    if (
      status === 401 &&
      !isAuthCheck &&
      window.location.pathname !== "/"
    ) {
      window.location.href = "/";
    }

    const normalized: ApiError = {
      status,
      message:
        data?.message ??
        data?.title ??
        (error.code === "ECONNABORTED"
          ? "Request timed out"
          : "Something went wrong"),
      errors: data?.errors,
    };

    return Promise.reject(normalized);
  },
);
