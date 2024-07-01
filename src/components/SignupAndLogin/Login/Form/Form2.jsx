import { ErrorMessage, Field, Form, Formik } from "formik";
import { BounceLoader } from "react-spinners";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { VerifyMessageValid } from "../../../../core/validation/signup";
import { VerifyCodeApi } from "../../../../core/services/api/RegisterApi";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
	LoginAPI,
	LoginStep2API,
} from "../../../../core/services/api/loginApi";
import { checkExist } from "../../../../core/services/MultiAccount/checkExist";
import { deactivateOtherUsers } from "../../../../core/services/MultiAccount/deactivate";

const Form2 = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { loginInfo } = useSelector((s) => s.loginInfo);
	const resendAgain = async () => {
		const result = await LoginAPI(loginInfo);
		result.success
			? toast.success(result.message)
			: toast.error(result.message);
	};
	const handleVerify = async (e) => {
		setLoading(true);
		const result = await LoginStep2API(e.verifyCode, loginInfo);
		console.log(result);
		setLoading(false);

		if (result.success) {
			toast.success(result.message);
			const userObj = {
				phoneNumber: result.phoneNumber,
				isActive: true,
				token: result.token,
				id: result.id,
			};
			let usersList = JSON.parse(localStorage.getItem("UsersList"));
			console.log(usersList);
			if (!checkExist(result.phoneNumber)) {
				usersList
					? localStorage.setItem(
							"UsersList",
							JSON.stringify([...usersList, userObj])
					  )
					: localStorage.setItem("UsersList", JSON.stringify([userObj]));
				deactivateOtherUsers(result.id);
				setTimeout(() => {
					navigate("/Dashboard/" + result.id);
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
			toast.error(result.message);
		}
	};
	return (
		<>
			<Toaster />
			<Formik
				initialValues={{ verifyCode: "" }}
				validationSchema={VerifyMessageValid}
				onSubmit={(e) => {
					handleVerify(e);
				}}
			>
				{(props) => {
					return (
						<Form className="flex flex-col gap-3">
							<div className="flex flex-col gap-2">
								<Field
									placeholder="کد تایید را وارد کنید"
									name="verifyCode"
									className={`px-5 py-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
										props.errors.verifyCode &&
										"border-red-500 placeholder:text-red-500 "
									} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
								/>
								<h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="verifyCode" />
								</h2>
							</div>
							<div
								onClick={() => {
									resendAgain();
								}}
								className="text-metricBlack cursor-pointer text-sm"
							>
								ارسال مجدد
							</div>
							<button
								type="submit"
								className="group text-white py-3 px-4  bg-[#000] hover:bg-[#1C1D20]  rounded-full  flex items-center justify-center xl:justify-start gap-16  transition-all duration-200 "
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
								<div>تایید شماره همراه</div>
							</button>

							<NavLink
								to={"/Login"}
								className="flex items-center gap-4 w-full justify-center sm:text-2xl text-lg "
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
