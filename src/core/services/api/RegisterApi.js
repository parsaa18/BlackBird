import api from "../interceptor";

export const RegisterApi = async (user) => {
	try {
		const response = await api.post("/Sign/SendVerifyMessage", user);
		return response;
	} catch (error) {
		return error;
	}
};

export const VerifyCodeApi = async (code) => {
	try {
		const response = await api.post("/Sign/VerifyMessage", code);
		return response;
	} catch (error) {
		return error;
	}
};

export const FinalRegisterApi = async (user) => {
	try {
		const response = await api.post("/Sign/Register", user);
		return response;
	} catch (error) {
		return error;
	}
};