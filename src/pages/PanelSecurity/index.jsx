import React from "react";
import Navigations from "../../components/PanelSecurity/Navigations/Navigations";
import { Outlet } from "react-router-dom";

const Security = () => {
	return (
		<div className="flex gap-4 flex-col md:flex-row  lg:gap-10 relative  min-h-[525px] items-start justify-start	 px-10 py-20">
			<Navigations />
			<Outlet />
		</div>
	);
};

export default Security;
