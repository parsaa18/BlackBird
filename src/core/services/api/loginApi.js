import api from "../interceptor";

export const LoginAPI = async (user) => {
  try {
    const response = await api.post("/Sign/Login", user);
    return response;
  } catch (error) {
    return error;
  }
};
export const LoginStep2API = async (code, user) => {
  console.log(code, user);
  try {
    const response = await api.post(
      `/Sign/LoginTwoStep?VrifyCode=${code}`,
      user
    );
    return response;
  } catch (error) {
    return error;
  }
};
