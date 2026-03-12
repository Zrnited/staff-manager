import { FiEyeOff } from "react-icons/fi";
import { abiaLogo } from "../constants/images";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { FakeUserType, LoginForm } from "../types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils";

export default function Home() {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({
    employeeId: "",
    password: "",
  });
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const cred: FakeUserType = {
    employeeId: "123456",
    password: "baker",
    role: "admin",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const redirect = () => {
    if (cred.role === "admin") {
      navigate("/adm/d", { replace: true });
    } else {
      navigate("/usr/d", { replace: true });
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!form.employeeId || !form.password) return;
    // signInUser();

    if (form.employeeId !== cred.employeeId || form.password !== cred.password)
      toast.error("Invalid Credentials");

    if (cred.role === "admin") {
      setCookie("admin-auth", "somevaluexyz");
    } else {
      setCookie("user-auth", "somevaluexyz");
    }

    setIsAuth(true);
  };

  useEffect(() => {
    if (isAuth) redirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <main className="min-h-screen flex items-center justify-center w-full">
      <div className="space-y-7">
        <div className="flex justify-center">
          <img
            decoding="async"
            loading="lazy"
            alt="logo"
            draggable={false}
            className="w-37.5 lg:w-40"
            src={abiaLogo}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-8 border border-[#E2E8F0] bg-white rounded-xl space-y-1 text-[#0F172A] lg:p-10 lg:w-125"
        >
          <h2 className="text-xl lg:text-2xl capitalize font-semibold">
            login
          </h2>
          <p className="text-[#64748B] text-sm lg:text-base">
            Enter your credentials to access the platform
          </p>
          <div className="mt-8 flex flex-col gap-y-1">
            <label className="capitalize">employee ID</label>
            <input
              type="text"
              name="employeeId"
              required
              value={form.employeeId}
              onChange={handleChange}
              placeholder="Enter Employee ID"
              className="border border-[#E2E8F0] w-full px-5 h-12.5 rounded-xl focus:outline-[#1D8F26]"
            />
          </div>
          <div className="mt-3 flex flex-col gap-y-1 relative lg:mt-5">
            <label className="capitalize">password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="*************"
              className="border border-[#E2E8F0] w-full px-5 h-12.5 rounded-xl focus:outline-[#1D8F26]"
            />
            <FiEyeOff className="absolute bottom-4 right-4" color="#64748B" />
          </div>
          <button
            disabled={!form.employeeId || !form.password}
            className="w-full h-12.5 rounded-xl bg-[#1D8F26] hover:bg-[#27c034] text-white focus:outline-none mt-5 cursor-pointer transition ease-in-out delay-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Login
          </button>
          <div className="flex items-center gap-x-1 justify-center mt-1.5 lg:mt-3 text-sm lg:text-base">
            <p>Don't have an account yet?</p>
            <Link
              className="text-[#1D8F26] hover:text-[#27c034] transition ease-in-out delay-100"
              to={"/signup"}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
