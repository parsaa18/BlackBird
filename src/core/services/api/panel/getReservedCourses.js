import api from "../../interceptor";

export const getMyReservedCoursesApi = async () => {
	try {
		const result = await api.get("/SharePanel/GetMyCoursesReserve");
		return result;
	} catch (error) {
		return error;
	}
};
