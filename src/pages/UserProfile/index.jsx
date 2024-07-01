import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import EditProfileNav from "../../components/UserPanel/EditProfileNavigator";
import ProfileContainer from "../../components/UserPanel/ProfileContainer/profileContainer";

const UserProfile = () => {
	return (
		<div className="flex flex-col gap-7 relative  min-h-[525px] px-10">
			<ProfileContainer />
			<div className="flex flex-col sm:flex-row gap-10">
				<EditProfileNav />
				<Outlet />
			</div>
		</div>
	);
};

export default UserProfile;
