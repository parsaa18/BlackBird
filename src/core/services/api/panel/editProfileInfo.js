import api from "../../interceptor";

export const editProfileInfoApi = async (obj) => {
	try {
		const result = await api.put("/SharePanel/UpdateProfileInfo", obj);
		return result;
	} catch (error) {
		return error;
	}
};
