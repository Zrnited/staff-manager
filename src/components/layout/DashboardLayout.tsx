/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import { deleteCookie } from "../../utils";

export default function DashboardLayout() {
  const [sidenav, setSidenav] = useState<boolean>(false);
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return;
    navigate("/", { replace: true });
    deleteCookie("sessionId"); //in case cookie remains while user object is null
  }, []);

  return (
    <main className="min-h-screen flex">
      <Sidebar setSidenav={setSidenav} sidenav={sidenav} />
      {/* backdrop blur */}
      <div
        className={`fixed top-0 bottom-0 w-full backdrop-blur-md z-10 transition-all ease-in-out delay-100 lg:hidden ${
          sidenav ? "left-0" : "-left-full"
        }`}
      />
      <section className="flex-1 bg-[#F5F7FA] lg:overflow-hidden lg:h-screen">
        <header className="fixed left-0 right-0 top-0 flex items-center justify-center z-10 lg:hidden">
          <nav className="w-full flex justify-end max-w-360 bg-white p-3 border-b border-[#E6E6E6]">
            {/* hamburger */}
            <button
              onClick={() => setSidenav(!sidenav)}
              className="relative w-8 h-8 flex items-center justify-center cursor-pointer lg:hidden"
              aria-label="Toggle Navigation"
            >
              {/* top bar */}
              <span
                className={`absolute h-1 w-10 bg-[#2D2D2F] transition-all duration-300 ease-in-out rounded-full ${
                  sidenav
                    ? "rotate-45 translate-y-0 bg-[#FF383C]"
                    : "-translate-y-2 rotate-0"
                }`}
              />
              {/* bottom bar */}
              <span
                className={`absolute h-1 w-10 bg-[#2D2D2F] transition-all rounded-full duration-300 ease-in-out ${
                  sidenav
                    ? "-rotate-45 translate-y-0 bg-[#FF383C]"
                    : "translate-y-2 rotate-0"
                }`}
              />
            </button>
          </nav>
        </header>
        <div className="w-full h-full pt-17 pb-5 px-5 lg:overflow-y-scroll activity lg:pt-5">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
