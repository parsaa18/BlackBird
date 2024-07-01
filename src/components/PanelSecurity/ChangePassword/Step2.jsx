import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI, LoginStep2API } from "../../../core/services/api/loginApi";
import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import { BounceLoader } from "react-spinners";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

const ChangePassWordStep2 = () => {
	const { loginInfo } = useSelector((s) => s.loginInfo);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleChangePassword = async (e) => {
		setLoading(true);
		const result = await LoginStep2API(e.verifyCode, loginInfo);
		setLoading(false);
		console.log(result);
		if (result.success) {
			toast.success(result.message);
			setNewToken(result.token);
			setTimeout(() => {
				navigate("/Dashboard");
			}, 1000);
		} else {
			toast.error(result.message);
		}
	};

	return (
		<>
			<>
				<Toaster />
				<div className="flex flex-col gap-10 px-0 sm:px-10 xl:px-40   justify-center w-full ">
					<div className="flex flex-col gap-3 text-metricBlack">
						<h3 className="text-xl font-bold">
							ما کد تاییدی به شماره ی شما ارسال کرده ایم
						</h3>
						<h4 className="text-xs md:text-base">
							برای تغییر رمز عبور کد ارسالی را وارد کنید
						</h4>
					</div>
					<Formik
						initialValues={{
							verifyCode: "",
						}}
						onSubmit={handleChangePassword}
					>
						<Form className="w-full  flex flex-col gap-5">
							<div className="flex flex-col gap-2">
								<label htmlFor="verifyCode" className="text-metricGray3">
									کد تایید
								</label>
								<Field
									name="verifyCode"
									id="verifyCode"
									className="px-5 py-3  rounded-full border border-metricGray2 outline-none focus:border-metricGray3 bg-metricWhite text-metricBlack transition-all duration-150 text-sm"
									placeholder="کد ارسال شده را وارد کنید"
								/>
							</div>

							<div className="flex justify-center items-center pt-10">
								<button
									type="submit"
									className="group text-white py-2 px-4  gap-1 text-sm  bg-[rgb(23,23,23)] hover:bg-[#1C1D20]  rounded-full  flex  items-center  transition-all duration-200 "
								>
									<div className="ml-2 w-8 h-8  items-center justify-center flex">
										<div
											className={`  text-[#020202]  bg-white rounded-full w-2 h-2 flex items-center justify-center group-hover:w-6 group-hover:h-6 ${
												loading && "w-6 h-6"
											} transition-all duration-300`}
										>
											{loading ? (
												<BounceLoader color="#000" size={20} />
											) : (
												<FaCheck className="opacity-0 group-hover:opacity-100" />
											)}
										</div>
									</div>
									<div>تایید</div>
								</button>
							</div>
							<Link
								to={"/DashBoard/Security/ChangePassword"}
								className="text-3xl text-metricBlack m-auto font-semibold cursor-pointer"
							>
								بازگشت
							</Link>
						</Form>
					</Formik>
				</div>
			</>
		</>
	);
};

export default ChangePassWordStep2;
