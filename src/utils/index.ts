import Cookies from "js-cookie";

//set cookies
export const setCookie = (key: string, value: string) => {
  const expires = new Date(Date.now() + 1 * 60 * 60 * 1000);
  Cookies.set(key, value, {
    expires: expires,
    path: "/",
    //   domain: "example.com",
    //   secure: true, // HTTPS only
    sameSite: "strict", // strict | lax | none
  });
};

//delete cookies
export const deleteCookie = (key: string, path?: string) => {
  Cookies.remove(key, { path: path ? path : "/" });
};

//fetch a cookie
export const fetchCookie = (key: string) => {
  const cookie = Cookies.get(key);
  return cookie;
};

//local storage logics
export const setStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);

  if (!item) return null;

  return JSON.parse(item) as T;
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

// utils/validate-password.ts
export type PasswordCheck = {
  valid: boolean;
  errors: string[];
};

const MIN_LENGTH = 8;
const MAX_LENGTH = 128;

const COMMON_PASSWORDS = new Set([
  "password",
  "password1",
  "password123",
  "12345678",
  "123456789",
  "qwerty123",
  "iloveyou",
  "admin123",
  "welcome1",
  "letmein123",
]);

export function validatePassword(
  password: string,
  // context: { email?: string; name?: string } = {},
): PasswordCheck {
  const errors: string[] = [];

  if (typeof password !== "string" || password.length === 0) {
    return { valid: false, errors: ["Password is required"] };
  }

  if (password.length < MIN_LENGTH) {
    errors.push(`Must be at least ${MIN_LENGTH} characters`);
  }
  if (password.length > MAX_LENGTH) {
    errors.push(`Must be at most ${MAX_LENGTH} characters`);
  }
  if (!/[a-z]/.test(password)) errors.push("Must include a lowercase letter");
  if (!/[A-Z]/.test(password)) errors.push("Must include an uppercase letter");
  if (!/\d/.test(password)) errors.push("Must include a number");
  if (!/[^A-Za-z0-9]/.test(password))
    errors.push("Must include a special character");
  if (/\s/.test(password)) errors.push("Must not contain spaces");

  const lower = password.toLowerCase();

  if (COMMON_PASSWORDS.has(lower)) {
    errors.push("Too common, choose something less guessable");
  }

  // const emailName = context.email?.split("@")[0]?.toLowerCase();
  // if (emailName && emailName.length >= 3 && lower.includes(emailName)) {
  //   errors.push("Must not contain your email name");
  // }

  // const firstName = context.name?.trim().split(/\s+/)[0]?.toLowerCase();
  // if (firstName && firstName.length >= 3 && lower.includes(firstName)) {
  //   errors.push("Must not contain your name");
  // }

  return { valid: errors.length === 0, errors };
}
