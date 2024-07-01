export const checkExist = (phoneNumber) => {
	const usersList = JSON.parse(localStorage.getItem("UsersList"));
	if (usersList) {
		for (var item of usersList) {
			if (item.phoneNumber == phoneNumber) {
				return true;
			}
		}
	}
	return false;
};
