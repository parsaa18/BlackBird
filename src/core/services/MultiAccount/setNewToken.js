export const setNewToken = (token) => {
	const usersList = JSON.parse(localStorage.getItem("UsersList"));
	if (usersList) {
		for (let item of usersList) {
			if (item.isActive) {
				item.token = token;
			}
		}
	}

	localStorage.setItem("UsersList", JSON.stringify(usersList));
};
