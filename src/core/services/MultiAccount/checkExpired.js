import { MultiProfilerInterceptor } from "../interceptor";

export const checkExpired = async () => {
	const usersList = JSON.parse(localStorage.getItem("UsersList"));
	const newUsersList = [];
	if (usersList) {
		for (var item of usersList) {
			try {
				const apiResult = await MultiProfilerInterceptor.get(
					"/SharePanel/GetProfileInfo",
					{
						headers: {
							Authorization: "Bearer " + item.token,
						},
					}
				);
				Boolean(apiResult) && newUsersList.push(item);
			} catch (error) {
				console.log(
					error.code === "ERR_NETWORK",
					error,
					"error From Expired Account "
				);
			}
		}
		localStorage.setItem("UsersList", JSON.stringify(newUsersList));
	}
	return false;
};
