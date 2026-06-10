import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
  return response.data.token;
};

export const getKantinMenu = async () => {
  const response = await axios.get(`${API_URL}/products?limit=10`);
  return response.data;
};
