import api from "../interceptor";

export const CourseDetailsAPI = async (id) => {
	try {
		const result = await api.get(`/Home/GetCourseDetails?CourseId=` + id);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const ArchiveCourseAPI = async (obj) => {

  try {
    const result = await api.post("/Course/AddCourseFavorite", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const DeleteArchiveCourseAPI = async (obj) => {
  try {
    const result = await api.delete("/Course/DeleteCourseFavorite", {
      data: obj,
    });
    return result;
  } catch (error) {
    console.log(error);
  }

};

export const ReserveCourseAPI = async (obj) => {
  try {
    const result = await api.post("/CourseReserve/ReserveAdd", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const LikeCourseAPI = async (params) => {
  try {
    const result = await api.post(`/Course/AddCourseLike?CourseId=${params.id}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const DeleteLikeCourseAPI = async (obj) => {
  try {
    const result = await api.delete("/Course/DeleteCourseLike", {
      data: obj,
    });
    console.log(result , "Successfully deleted")
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const DissLikeCourseAPI = async (params) => {
  try {
    const result = await api.post(`/Course/AddCourseDissLike?CourseId=${params.id}`);
    console.log(result , "Successfully added")
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const RateCourseAPI = async (id , rate) => {
  console.log(id , "params" , rate , "rate")
  try {
    const result = await api.post(`/Course/SetCourseRating?CourseId=${id}&RateNumber=${rate}`);
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

export const CourseTopAPI = async () => {
  try {
    const result = await api.get("/Home/GetCoursesTop?Count=3");
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};