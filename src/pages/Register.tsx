import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import type { ApiError } from "../lib/api";
import { validatePassword } from "../utils";

type Register = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState<Register>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = form;

    if (!firstname.trim() || !lastname.trim()) {
      return toast.error("Invalid names");
    }

    if (!password.trim()) return toast.error("Password required");

    const { valid, errors } = validatePassword(password);

    if (!valid) return toast.error(`Password Fixes: ${errors.join(", ")}`);

    setIsLoading(true);
    await signup(firstname, lastname, email, password)
      .then((res) => {
        toast.success(res.message ? res.message : "Registration successful");
        navigate("/", { replace: true });
      })
      .catch((e) => {
        const err = e as ApiError;
        toast.error(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <main className="min-h-screen flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="p-8 border border-[#E2E8F0] bg-white rounded-xl space-y-1 text-[#0F172A] m-3 sm:m-0 lg:p-10 lg:w-130"
      >
        <h2 className="text-xl font-grotesk lg:text-2xl capitalize font-bold text-[#171D26]">
          sign up to start using staff manager
        </h2>
        <p className="text-[#64748B] text-sm lg:text-base">
          Kindly enter your credentials to register.
        </p>
        {/* firstName */}
        <div className="mt-5 flex flex-col gap-y-1">
          <label className="capitalize font-medium">first name*</label>
          <input
            type="text"
            name="firstname"
            required
            value={form.firstname}
            onChange={handleChange}
            placeholder="e.g. John"
            className="border border-[#E2E8F0] w-full px-5 h-12.5 rounded-xl focus:outline-[#2A9290]"
          />
        </div>
        {/* lastName */}
        <div className="mt-3 flex flex-col gap-y-1">
          <label className="capitalize font-medium">last name*</label>
          <input
            type="text"
            name="lastname"
            required
            value={form.lastname}
            onChange={handleChange}
            placeholder="e.g. Doe"
            className="border border-[#E2E8F0] w-full px-5 h-12.5 rounded-xl focus:outline-[#2A9290]"
          />
        </div>
        {/* email */}
        <div className="mt-3 flex flex-col gap-y-1">
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
        {/* password */}
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
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute bottom-4 right-4 cursor-pointer text-[#64748B]"
          >
            {showPass ? <FiEye /> : <FiEyeOff />}
          </span>
        </div>
        <button
          disabled={!form.email || !form.password || isLoading}
          className="w-full h-12.5 rounded-xl bg-[#2A9290] hover:bg-[#242d3b] text-white focus:outline-none mt-5 cursor-pointer transition ease-in-out delay-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
        <div className="flex items-center gap-x-1 justify-center mt-1.5 lg:mt-3 text-sm lg:text-base">
          <p>
            Already have an account?{" "}
            <Link
              className="font-semibold text-[#2A9290] hover:underline"
              to={"/"}
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
