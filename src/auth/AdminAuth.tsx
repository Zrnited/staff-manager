// import { Navigate, Outlet } from "react-router-dom";
// import { useAppContext } from "../context";

// export default function Auth() {
//   const { bearerToken } = useAppContext();
//   //   Check if a user is authenticated
//   return bearerToken ? <Outlet /> : <Navigate to="/login" replace />;
// }

import type { ReactNode } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function AdminAuth({ children }: ProtectedRouteProps) {
  const token = Cookies.get("admin-auth");

  return token ? <>{children}</> : <Navigate to="/" replace />;
}
