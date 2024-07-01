import { ErrorMessage, Field, Form, Formik } from "formik";
import { BounceLoader } from "react-spinners";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import {
	ForgetPassApi,
	GetConfirmValue,
	ResetPasswordApi,
} from "../../../core/services/api/ResetPassword";
import {
	forget1Validation,
	forget2Validation,
} from "../../../core/validation/Forget";

const Form2 = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [obj, setObj] = useState({ userId: 0, resetValue: "" });
	const { configValue } = useParams();
	const getConfigue = async () => {
		const result = await GetConfirmValue(configValue);
		result.success
			? setObj({ userId: result.id, resetValue: result.message })
			: toast.error(result.message);
	};
	const HandleResetPassword = async (result) => {
		setLoading(true);
		if (result.password === result.password2) {
			const newPasswordObj = { ...obj, newPassword: result.password };
			const resetPass = await ResetPasswordApi(newPasswordObj);
			resetPass.success
				? toast.success(resetPass.message, {
						style: { borderRadius: "5px" },
				  })
				: toast.error(resetPass.message, { style: { borderRadius: "5px" } });
			setLoading(false);

			setTimeout(() => {
				resetPass.success && navigate("/login");
			}, 2000);
		} else toast.error("رمز عبور ها مطابقت ندارند");
	};
	useEffect(() => {
		getConfigue();
	}, []);

	return (
		<>
			<Toaster />
			<Formik
				initialValues={{ password: "", password2: "" }}
				validationSchema={forget2Validation}
				onSubmit={HandleResetPassword}
			>
				{(props) => {
					return (
						<Form className="flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								<Field
									placeholder="رمز عبور خود را وارد کنید"
									name="password"
									type="password"
									className={`px-5 py-3 sm:text-sm text-xs transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
										props.errors.password &&
										"border-red-500 placeholder:text-red-500 "
									} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
								/>
								<h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="password" />
								</h2>
							</div>
							<div className="flex flex-col gap-2">
								<Field
									placeholder="رمز عبور خود را مجددا وارد کنید"
									name="password2"
									type="password"
									className={`px-5 py-3 sm:text-sm text-xs transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
										props.errors.password2 &&
										"border-red-500 placeholder:text-red-500 "
									} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
								/>
								<h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="password2" />
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

							<NavLink
								to={"/ForgetPassword"}
								className="flex items-center gap-4 w-full justify-center text-base sm:text-2xl"
							>
								<FaArrowRight />
								<p>بازگشت</p>
							</NavLink>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

export default Form2;
