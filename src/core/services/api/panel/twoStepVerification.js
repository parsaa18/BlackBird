import api from "../../interceptor";

export const GetSecurityInfoApi = async () => {
	try {
		const result = await api.get("/SharePanel/GetSecurityInfo");
		return result;
	} catch (error) {
		return error;
	}
};
export const EditSecurityApi = async (obj) => {
	try {
		const result = await api.put("/SharePanel/EditSecurity", obj);
		return result;
	} catch (error) {
		return error;
	}
};
