import api from "../interceptor";

export const ForgetPassApi = async (gmail) => {
	try {
		const response = await api.post("/Sign/ForgetPassword", gmail);
		return response;
	} catch (error) {
		return error;
	}
};

export const GetConfirmValue = async (confrimValue) => {
	try {
		const response = await api.get("/Sign/Reset/" + confrimValue);
		return response;
	} catch (error) {
		return error;
	}
};
export const ResetPasswordApi = async (newPassword) => {
	try {
		const response = await api.post("/Sign/Reset/", newPassword);
		return response;
	} catch (error) {
		return error;
	}
};
