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
