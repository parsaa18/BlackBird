import { json, useNavigate } from "react-router-dom";
import { deactivateOtherUsers } from "./deactivate";

export const logout = () => {
	const usersList = JSON.parse(localStorage.getItem("UsersList"));
	const newUsersList = [];
	for (let item of usersList) {
		if (!item.isActive) {
			newUsersList.push(item);
		}
	}
	localStorage.setItem("UsersList", JSON.stringify(newUsersList));
	console.log(newUsersList.length, "sadadsasdadadadsadas");

	if (newUsersList.length == 0) {
		console.log(newUsersList.length, "sadadsas");

		return "EMPTY";
	} else {
		console.log(newUsersList.length, "sadadsas");
		deactivateOtherUsers(newUsersList[0].id);
		return newUsersList[0].id;
	}
};

export const logoutById = (id) => {
	const usersList = JSON.parse(localStorage.getItem("UsersList"));
	const newUsersList = [];
	for (let item of usersList) {
		if (item.id != id) {
			newUsersList.push(item);
		}
	}
	localStorage.setItem("UsersList", JSON.stringify(newUsersList));
	console.log(newUsersList, "sadadsasdadadadsadas");

	if (newUsersList.length == 0) {
		console.log(newUsersList.length, "sadadsas");

		return "EMPTY";
	} else {
		console.log(newUsersList[0].id, "sadadsassss");
		deactivateOtherUsers(newUsersList[0].id);
		return newUsersList[0].id;
	}
};
