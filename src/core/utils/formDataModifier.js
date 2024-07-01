export const formDataModifier = (obj) => {
	const formData = new FormData();
	Object.entries(obj).map(([key, value]) => {
		formData.append(key, value);
	});
	return formData;
};
