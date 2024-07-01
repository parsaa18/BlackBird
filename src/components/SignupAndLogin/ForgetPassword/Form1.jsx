import { ErrorMessage, Field, Form, Formik } from "formik";
import { BounceLoader } from "react-spinners";
import { FaCheck } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ForgetPassApi } from "../../../core/services/api/ResetPassword";
import { forget1Validation } from "../../../core/validation/Forget";

const Form1 = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const HandleResetPassword = async (result) => {
		const obj = {
			...result,
			baseUrl: "http://localhost:5173/ForgetPassword/Step2",
		};
		setLoading(true);
		const forgetPass = await ForgetPassApi(obj);
		console.log(forgetPass);
		forgetPass.success
			? toast.success("ایمیل برای شما ارسال شد", {
					style: { borderRadius: "5px" },
			  })
			: toast.error(forgetPass.message, { style: { borderRadius: "5px" } });
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<>
			<Toaster />
			<Formik
				initialValues={{ email: "" }}
				validationSchema={forget1Validation}
				onSubmit={(e) => {
					HandleResetPassword(e);
				}}
			>
				{(props) => {
					return (
						<Form className="flex flex-col gap-6">
							<div className="flex flex-col gap-2">
								<Field
									placeholder="ایمیل همراه  خود را وارد کنید"
									name="email"
									type="email"
									className={`px-5 py-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
										props.errors.email &&
										"border-red-500 placeholder:text-red-500 "
									} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
								/>
								<h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="email" />
								</h2>
							</div>

							<button
								type="submit"
								className="group text-white py-3 px-4  bg-metricBlack hover:bg-[#1C1D20]  rounded-full  flex items-center justify-center xl:justify-start gap-14  transition-all duration-200 "
							>
								<div className="ml-2 w-8 h-8 hidden xl:flex items-center justify-center ">
									<div
										className={`  text-xl text-[#1C1D20]  bg-white rounded-full w-2 h-2 flex items-center justify-center group-hover:w-7 group-hover:h-7 ${
											loading && "w-7 h-7"
										} transition-all duration-300`}
									>
										{loading ? (
											<BounceLoader color="#000" size={20} />
										) : (
											<FaCheck className="opacity-0 group-hover:opacity-100" />
										)}
									</div>
								</div>
								<div>ورود به حساب کاربری</div>
							</button>

							<div className="flex items-center  gap-1 w-full justify-center text-xs sm:text-sm">
								<p>رمز عبور دارید؟ </p>
								<NavLink
									to={"/Login"}
									className="underline underline-offset-[5px] font-semibold"
								>
									ورود به حساب کاربری
								</NavLink>
							</div>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

export default Form1;
