import { Outlet } from "react-router-dom";
import img from "../../../assets/image/Signup-Login/SignUp_img.png";
import ProcessBar from "../../SignupAndLogin/SignUp/ProcessBar";

const SignupLayout = () => {
	return (
		<div className=" min-h-screen min-w-screen max-w-[1400px] gap-10 bg-metricYellow1 flex justify-center items-center px-10	xl:justify-between">
			<div className="w-[560px] h-[580px] bg-metricWhite rounded-[48px] flex flex-col items-center p-10 px-5 sm:px-20 md:px-24 justify-between">
				<ProcessBar />
				<Outlet />
				<div></div>
			</div>
			<div className=" flex-col gap-1 pl-20 hidden xl:flex">
				<h1 className="text-3xl font-bold">جایی برای پیشرفت</h1>
				<h3 className="font-bold ">به ما در آینده بپیوندید</h3>
				<img src={img} className="w-[480px] h-[450px]" />
			</div>
		</div>
	);
};
export default SignupLayout;
