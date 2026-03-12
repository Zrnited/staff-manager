import type { ReactNode } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function AdminAuth({ children }: ProtectedRouteProps) {
  const token = Cookies.get("sessionId");

  return token ? <>{children}</> : <Navigate to="/" replace />;
}
