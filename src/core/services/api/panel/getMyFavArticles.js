import api from "../../interceptor";

export const getMyFavArticlesApi = async () => {
  try {
    const result = await api.get("/SharePanel/GetMyFavoriteNews");
    return result;
  } catch (error) {
    return error;
  }
};
