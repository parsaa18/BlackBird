import api from "../../interceptor";

export const getMyFavCoursesApi = async () => {
  try {
    const result = await api.get("/SharePanel/GetMyFavoriteCourses");
    return result;
  } catch (error) {
    return error;
  }
};
