import { Link, useLocation } from "react-router-dom";

const EditProfileNav = () => {
	const location = useLocation();

	const active = location.pathname.toLowerCase().includes("profileimage")
		? 2
		: location.pathname.toLowerCase().includes("address")
		? 3
		: location.pathname.toLowerCase().includes("medialinks")
		? 4
		: 1;
	return (
		<div className="flex sm:flex-col flex-wrap items-center gap-3">
			<Link
				className={`w-24 sm:w-40 h-10 transition-all duration-200 flex items-center justify-center rounded-full bg-metricGray2  text-xs ${
					active === 1
						? "bg-metricOrange font-bold text-metricBlack"
						: "font-medium"
				}`}
				to={"./"}
			>
				اطلاعات شخصی
			</Link>
			<Link
				className={`w-24 sm:w-40 h-10 transition-all duration-200 flex items-center justify-center rounded-full bg-metricGray2  text-xs ${
					active === 2
						? "bg-metricOrange font-bold text-metricBlack"
						: "font-medium"
				}`}
				to={"ProfileImage"}
			>
				عکس پروفایل
			</Link>
			<Link
				className={`w-24 sm:w-40 h-10 transition-all duration-200 flex items-center justify-center rounded-full bg-metricGray2  text-xs ${
					active === 3
						? "bg-metricOrange font-bold text-metricBlack"
						: "font-medium"
				}`}
				to={"Address"}
			>
				آدرس
			</Link>
			<Link
				className={`w-24 sm:w-40 h-10 transition-all duration-200 flex items-center justify-center rounded-full bg-metricGray2  text-xs ${
					active === 4
						? "bg-metricOrange font-bold text-metricBlack"
						: "font-medium"
				}`}
				to={"MediaLinks"}
			>
				لینک ها
			</Link>
		</div>
	);
};
export default EditProfileNav;
