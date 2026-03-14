import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAppContext } from "../context";
import { useState } from "react";
import type { LoginForm, User } from "../types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils";
import { v4 as uuidv4 } from "uuid";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState<boolean>(false);
  const userId = uuidv4();

  const accesscred: User = {
    id: userId,
    name: "Chief HR Manager",
    email: "admin@email.com",
    password: "123456",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.email !== accesscred.email ||
      form.password !== accesscred.password
    ) {
      toast.error("Invalid Credentials");
      return;
    }

    //dynamic ID
    const id = uuidv4();

    setCookie("sessionId", id);
    setUser(accesscred);
    navigate("/d", { replace: true });
    toast.success("Login successful");
  };

  return (
    <main className="min-h-screen flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="p-8 border border-[#E2E8F0] bg-white rounded-xl space-y-1 text-[#0F172A] m-3 sm:m-0 lg:p-10 lg:w-125"
      >
        <h2 className="text-xl font-grotesk lg:text-2xl capitalize font-bold text-[#171D26]">
          Welcome to Staff Manager
        </h2>
        <p className="text-[#64748B] text-sm lg:text-base">
          Kindly enter your credentials to access the platform.
        </p>
        <div className="mt-8 flex flex-col gap-y-1">
          <label className="capitalize font-medium">email*</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="youremail@example.com"
            className="border border-[#E2E8F0] w-full px-5 h-12.5 rounded-xl focus:outline-[#2A9290]"
          />
        </div>
        <div className="mt-3 flex flex-col gap-y-1 relative lg:mt-5">
          <label className="capitalize font-medium">password*</label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            placeholder="*************"
            className="border border-[#E2E8F0] w-full px-5 h-12.5 rounded-xl focus:outline-[#2A9290]"
          />
          <button
            onClick={() => setShowPass(!showPass)}
            className="absolute bottom-4 right-4 cursor-pointer text-[#64748B]"
          >
            {showPass ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        <button
          disabled={!form.email || !form.password}
          className="w-full h-12.5 rounded-xl bg-[#2A9290] hover:bg-[#242d3b] text-white focus:outline-none mt-5 cursor-pointer transition ease-in-out delay-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Sign In
        </button>
        <div className="flex items-center gap-x-1 justify-center mt-1.5 lg:mt-3 text-sm lg:text-base">
          <p>© 2026 All Right Reserved</p>
        </div>
      </form>
    </main>
  );
}
