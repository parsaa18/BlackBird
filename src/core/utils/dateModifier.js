export const dateModifier = (date) => {
	const option = {
		day: "2-digit",
		month: "long",
		year: "numeric",
	};
	const modifiedDate = new Date(date).toLocaleDateString("fa-IR", option);
	return modifiedDate;
};
export const formDateModifier = (date) => {
	const option = {
		timeZone: "Asia/Tehran",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	};
	const modifiedDate = new Date(date).toISOString().slice(0, 10);
	return modifiedDate;
};
