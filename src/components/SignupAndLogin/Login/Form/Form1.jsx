import { ErrorMessage, Field, Form, Formik } from "formik";
import { BounceLoader } from "react-spinners";
import { FaCheck } from "react-icons/fa6";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginAPI } from "../../../../core/services/api/loginApi";
import loginValidation from "../../../../core/validation/login";
import { useDispatch, useSelector } from "react-redux";
import { setLoginInfo } from "../../../../core/provider/Login/login";
import { checkExist } from "../../../../core/services/MultiAccount/checkExist";
import { deactivateOtherUsers } from "../../../../core/services/MultiAccount/deactivate";

const Form1 = () => {
	const [loading, setLoading] = useState(false);
	const [viewPassword, setViewPassword] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loginInfo } = useSelector((s) => s.loginInfo);
	const handleFormSubmit = async (result) => {
		setLoading(true);
		const login = await LoginAPI(result);
		//MULTIACCOUNT
		setLoading(false);
		console.log(login);
		if (login.success) {
			dispatch(setLoginInfo(result));
			if (login?.token) {
				const userObj = {
					phoneNumber: login.phoneNumber,
					isActive: true,
					token: login.token,
					id: login.id,
				};
				let usersList = JSON.parse(localStorage.getItem("UsersList"));
				console.log(usersList);
				if (!checkExist(login.phoneNumber)) {
					usersList
						? localStorage.setItem(
								"UsersList",
								JSON.stringify([...usersList, userObj])
						  )
						: localStorage.setItem("UsersList", JSON.stringify([userObj]));
					deactivateOtherUsers(login.id);
					toast.success(login.message, { style: { borderRadius: "5px" } });

					setTimeout(() => {
						navigate("/Dashboard/" + login.id);
					}, 1000);
				} else {
					toast.error("شما در حال حاضر با این اکانت لاگین کرده اید");
				}

				usersList = JSON.parse(localStorage.getItem("UsersList"));
				console.log(
					usersList?.filter((e) => {
						return e.isActive;
					}),
					"activeOne",
					usersList,
					"all"
				);
			} else {
				setTimeout(() => {
					navigate("Step2");
				}, 1000);
			}
		} else {
			toast.error(login.message, { style: { borderRadius: "5px" } });
		}
		//MULTIACCOUNT
	};

	return (
		<>
			<Toaster />
			<Formik
				initialValues={{ phoneOrGmail: "", password: "", rememberMe: false }}
				validationSchema={loginValidation}
				onSubmit={(e) => {
					handleFormSubmit(e);
				}}
			>
				{(props) => {
					return (
						<Form className="flex flex-col gap-3">
							<div className="flex flex-col gap-2">
								<Field
									placeholder="شماره یا ایمیل خود را وارد کنید"
									name="phoneOrGmail"
									className={`px-5 py-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
										props.errors.phoneOrGmail &&
										"border-red-500 placeholder:text-red-500 "
									} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
								/>
								<h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="phoneOrGmail" />
								</h2>
							</div>
							<div className="flex flex-col gap-2 ">
								<div className="relative w-full flex h-full">
									<label
										htmlFor="password "
										onClick={() => {
											setViewPassword(!viewPassword);
										}}
										className="absolute left-3 text-2xl text-metricGray3 top-1/2 -translate-y-[50%]"
									>
										{viewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
									</label>
									<Field
										placeholder="رمز عبور خود را وارد کنید"
										name="password"
										type={viewPassword ? "text" : "password"}
										id="password"
										className={`px-5 py-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full w-full border border-metricGray2 ${
											props.errors.password &&
											"border-red-500 placeholder:text-red-500 "
										} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
									/>
								</div>
								<h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="password" />
								</h2>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex gap-1 items-center">
									<input
										type="checkbox"
										name="rememberMe"
										id="rememberMe"
										onChange={() => {
											props.setFieldValue(
												"rememberMe",
												!props.values.rememberMe
											);
										}}
									/>
									<label htmlFor="rememberMe" className="text-sm font-semibold">
										مرا به خاطر بسپار
									</label>
								</div>
								<Link
									to={"/ForgetPassword"}
									className="text-sm text-metricGray3"
								>
									فراموشی رمز عبور
								</Link>
							</div>
							<button
								type="submit"
								className="group text-white py-3 px-4  bg-[#000000] hover:bg-[#1C1D20]  rounded-full  flex items-center justify-center xl:justify-start gap-16  transition-all duration-200 "
							>
								<div className="ml-2 w-8 h-8 hidden xl:flex items-center justify-center ">
									<div
										className={`  text-xl text-[#1C1D20]  bg-white rounded-full w-2 h-2 flex items-center justify-center group-hover:w-7 group-hover:h-7 ${
											loading && "w-7 h-7"
										} transition-all duration-300`}
									>
										{loading ? (
											<BounceLoader color="#000" size={16} />
										) : (
											<FaCheck className="opacity-0 group-hover:opacity-100 text-sm" />
										)}
									</div>
								</div>
								<div>ورود به حساب کاربری</div>
							</button>

							<div className="flex items-center gap-1 w-full justify-center text-sm">
								<p className="text-sm ">حساب کاربری ندارید؟ </p>
								<NavLink
									to={"/Signup"}
									className="underline underline-offset-[5px] font-semibold"
								>
									ایجاد حساب کاربری
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
