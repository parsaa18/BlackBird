import api from "../interceptor";

export const CourseListAPI = async (
  RowsOfPage,
  SortingCol,
  SortType,
  Query,
  CostDown,
  CostUp,
  ListTech,
  TechCount,
  courseLevelId,
  CourseTypeId,
  TeacherId,
  PageNumber
) => {
  try {
    const result = await api.get(
      `/Home/GetCoursesWithPagination?${
        PageNumber ? `&PageNumber=${PageNumber}` : ""
      }${RowsOfPage ? `&RowsOfPage=${RowsOfPage}` : ""}${
        SortingCol ? `&SortingCol=${SortingCol}` : ""
      }${SortType ? `&SortType=${SortType}` : ""}${
        Query ? `&Query=${Query}` : ""
      }${CostDown ? `&CostDown=${CostDown}` : ""}${
        CostUp ? `&CostUp=${CostUp}` : ""
      }${TechCount ? `&TechCount=${TechCount}` : ""}${
        ListTech ? `&ListTech=${ListTech}` : ""
      }${courseLevelId ? `&courseLevelId=${courseLevelId}` : ""}${
        CourseTypeId ? `&CourseTypeId=${CourseTypeId}` : ""
      }${TeacherId ? `&TeacherId=${TeacherId}` : ""}`
    );
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const CourseLevelAPI = async () => {
  try {
    const result = await api.get("/CourseLevel/GetAllCourseLevel");
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const CourseTypesAPI = async () => {
  try {
    const result = await api.get("/CourseType/GetCourseTypes");
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const CourseTechnologiesAPI = async () => {
  try {
    const result = await api.get("/Home/GetTechnologies");
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const CourseTeachersAPI = async () => {
  try {
    const result = await api.get("/Home/GetTeachers");
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};


