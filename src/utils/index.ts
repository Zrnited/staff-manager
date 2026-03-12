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
export const deleteCookie = (key: string, path: string) => {
  Cookies.remove(key, { path: path ? path : "/" });
};

//fetch a cookie
export const fetchCookie = (key: string) => {
  const cookie = Cookies.get(key);
  return cookie;
};

//convert Base64 -> File
export function base64ToFile(base64: string, filename: string) {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

//usage
// const file = base64ToFile(image!, "face.jpg");

// const formData = new FormData();
// formData.append("face", file);

// await fetch("/api/upload", {
//   method: "POST",
//   body: formData,
// });
