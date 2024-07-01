import api from "../../interceptor";

export const AddProfileImage = async (file) => {
	try {
		const result = await api.post("/SharePanel/AddProfileImage", file);
		return result;
	} catch (error) {
		return error;
	}
};
export const SelectProfileImage = async (file) => {
	try {
		const result = await api.post("/SharePanel/SelectProfileImage", file);
		return result;
	} catch (error) {
		return error;
	}
};
export const DeleteProfileImage = async (file) => {
	try {
		const result = await api.delete("/SharePanel/DeleteProfileImage", {
			data: file,
		});
		return result;
	} catch (error) {
		return error;
	}
};
