import axios from "axios";

export const getAllCountries = async () => {
  const baseUrl = import.meta.env.VITE_LIST_URL;
  const response = await axios.get(baseUrl, {
    timeout: 50000,
  });
  return response.data;
};
