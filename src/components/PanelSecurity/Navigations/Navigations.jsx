import { Link, useLocation } from "react-router-dom";

const Navigations = () => {
	const loc = useLocation();

	return (
		<div className="flex flex-row md:flex-col gap-3 min-w-full justify-between md:min-w-44 ">
			<Link
				to={"./ChangePassword"}
				className={`px-3 py-4 w-full text-xs font-semibold  ${
					loc.pathname.toLowerCase().includes("changepassword")
						? "bg-metricOrange"
						: "bg-metricGray2"
				} rounded-full flex items-center justify-center transition-all duration-300`}
			>
				تغییر رمز عبور
			</Link>
			<Link
				to={"./TwoStepVerification"}
				className={`px-3 py-4 w-full text-xs font-semibold  ${
					loc.pathname.toLowerCase().includes("changepassword")
						? "bg-metricGray2 "
						: "bg-metricOrange "
				} rounded-full flex items-center justify-center transition-all duration-300`}
			>
				احراز هویت دو مرحله ای
			</Link>
		</div>
	);
};

export default Navigations;
