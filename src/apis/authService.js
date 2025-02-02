
import axiosClient from "./axiosClient";

const login = async (body) => {
  return await axiosClient.post('/login', body);
};

const getInfo = async (userId) => {
  return await axiosClient.get (
    `/user/info/${userId}`
  );
}
export { login, getInfo }; 
