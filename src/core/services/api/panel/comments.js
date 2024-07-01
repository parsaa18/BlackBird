import api from "../../interceptor";

export const getMyCourseComments = async () => {
	try {
		const result = await api.get("/SharePanel/GetMyCoursesComments");
		return result;
	} catch (error) {
		return error;
	}
};
export const getMyNewsComments = async () => {
	try {
		const result = await api.get("/SharePanel/GetMyNewsComments");
		return result;
	} catch (error) {
		return error;
	}
};
