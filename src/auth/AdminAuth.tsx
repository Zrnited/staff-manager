import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context";
import DashboardLoadingInterface from "../components/layout/loading-interface";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function AdminAuth({ children }: ProtectedRouteProps) {
  const { user, fetchingUser } = useAppContext();

  if (fetchingUser) return <DashboardLoadingInterface />;

  return user ? <>{children}</> : <Navigate to="/" replace />;
}
