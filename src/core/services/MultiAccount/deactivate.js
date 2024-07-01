export const deactivateOtherUsers = (id) => {
	console.log(id);
	const usersList = JSON.parse(localStorage.getItem("UsersList"));
	if (usersList) {
		for (let item of usersList) {
			if (item.id != id) {
				item.isActive = false;
			} else if (item.id == id) {
				item.isActive = true;
			}
		}
	}
	console.log(usersList);
	localStorage.setItem("UsersList", JSON.stringify(usersList));
};
