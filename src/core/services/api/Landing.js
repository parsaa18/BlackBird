import api from "../interceptor";

export const CourseTopAPI = async () => {
  try {
    const result = await api.get("/Home/GetCoursesTop?Count=4");
    return result;
  } catch (error) {
    return error;
  }
};

export const NewsTopAPI = async () => {
  try {
    const result = await api.get(
      "/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC"
    );
    return result;
  } catch (error) {
    return error;
  }
};

export const TeacherApi = async () => {
  try {
    const result = await api.get("/Home/GetTeachers?count=4");
    return result;
  } catch (error) {
    return error;
  }
};

export const LandingReportApi = async () => {
  try {
    const result = await api.get("/Home/LandingReport");
    return result;
  } catch (error) {
    return error;
  }
};
