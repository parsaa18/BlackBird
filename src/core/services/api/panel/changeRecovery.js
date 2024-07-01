import api from "../../interceptor";

export const ChangeRecoveryApi = async (configue) => {
	try {
		const result = await api.get("/SharePanel/ChangeRecovery/" + configue);
		return result;
	} catch (error) {
		return error;
	}
};
