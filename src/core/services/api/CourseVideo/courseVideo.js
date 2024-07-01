import api from "../../TicketInterceptor/TicketInterceptor.js";

export const getCourseVideoById = async (courseId) => {
	try {
		const result = await api.get(`/getUniqueVideoByCourseID/${courseId}`);
		return result;
	} catch (error) {
		return error;
	}
};
