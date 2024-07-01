import api from "../../interceptor";

export const getProfileInfoApi = async () => {
  try {
    const result = await api.get("/SharePanel/GetProfileInfo");
    return result;
  } catch (error) {
    return error;
  }
};
