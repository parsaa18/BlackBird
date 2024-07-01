import axios from "axios";
const baseURL = "https://eduuu.liara.run/api";
const instance = axios.create({ baseURL });

const onSuccess = (res) => {
  return res.data;
};
const onFail = (error) => {
  return Promise.reject(error);
};
instance.interceptors.response.use(onSuccess, onFail);
instance.interceptors.request.use((opt) => {
  return opt;
});

export default instance;


