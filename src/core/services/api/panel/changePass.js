import api from "../../interceptor";

export const ChangePasswordApi = async (password) => {
	try {
		const result = await api.post("/SharePanel/ChangePassword", password);
		return result;
	} catch (error) {
		return error;
	}
};
