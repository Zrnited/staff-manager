import axios from "axios";

export const getAllCountries = async () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  console.log(baseUrl);
  const response = await axios.get(baseUrl, {
    // headers: {
    //   "Content-Type": "application/json",
    // },
    timeout: 50000,
  });
  return response.data;
};
