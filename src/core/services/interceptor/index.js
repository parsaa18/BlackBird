import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({ baseURL });

const onSuccess = (res) => {
  return res.data;
};
const onFail = (error) => {
  return Promise.reject(error);
};
const getTokenFromLocalStorage = () => {
  const usersList = JSON.parse(localStorage.getItem("UsersList"));
  const activeUser = usersList?.filter((e) => {
    return e.isActive;
  });
  if (activeUser?.[0]) {
    return activeUser?.[0]?.token; //MULTI ACCOUNT
  } else {
    return "";
  }
};
instance.interceptors.response.use(onSuccess, onFail);
instance.interceptors.request.use((opt) => {
  const token = getTokenFromLocalStorage();
  opt.headers["Authorization"] = "Bearer " + token;
  return opt;
});
export default instance;

// MULTI ACCOUNT

export const MultiProfilerInterceptor = axios.create({ baseURL });
MultiProfilerInterceptor.interceptors.response.use(onSuccess, onFail);
MultiProfilerInterceptor.interceptors.request.use((opt) => {
  return opt;
});
