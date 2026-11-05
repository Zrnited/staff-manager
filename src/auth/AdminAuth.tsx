import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function AdminAuth({ children }: ProtectedRouteProps) {
  const { user } = useAppContext();

  return user ? <>{children}</> : <Navigate to="/" replace />;
}
