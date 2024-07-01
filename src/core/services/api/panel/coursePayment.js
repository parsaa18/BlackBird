import api from "../../interceptor";

export const coursePayment1 = async (file) => {
	try {
		const result = await api.post("/CoursePayment/StudentAddPeyment", file);
		return result;
	} catch (error) {
		return error;
	}
};
export const coursePayment2 = async (file) => {
	try {
		const result = await api.post(
			"/CoursePayment/StudentAddPeymentImage",
			file
		);
		return result;
	} catch (error) {
		return error;
	}
};
