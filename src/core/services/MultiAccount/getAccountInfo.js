import { MultiProfilerInterceptor } from "../interceptor";

export const getAccountInfo = async (token) => {
	try {
		const result = MultiProfilerInterceptor.get("/SharePanel/GetProfileInfo", {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		return result;
	} catch (error) {
		return error;
	}
};
