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
