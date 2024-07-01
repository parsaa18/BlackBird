import { Outlet } from "react-router-dom";
import img from "../../../assets/image/Signup-Login/SignUp_img.png";
import ProcessBar from "../../SignupAndLogin/Login/ProcessBar";

const LoginLayout = () => {
	return (
		<div className=" min-h-screen min-w-screen max-w-[1400px] bg-metricYellow1 flex justify-center items-center px-10	xl:justify-between gap-10">
			<div className="w-[560px] h-[580px] bg-metricWhite rounded-[48px] flex flex-col items-center p-10 sm:px-20 md:px-24 gap-10 justify-center">
				<Outlet />
			</div>
			<div className="hidden xl:flex flex-col gap-1 pl-20">
				<h1 className="text-3xl font-bold">جایی برای پیشرفت</h1>
				<h3 className="font-bold ">به ما در آینده بپیوندید</h3>
				<img src={img} className="w-[480px] h-[450px]" />
			</div>
		</div>
	);
};
export default LoginLayout;
