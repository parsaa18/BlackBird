import { ErrorMessage, Field, Form, Formik } from "formik";
import { BounceLoader } from "react-spinners";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { FinalRegister } from "../../../../core/validation/signup";
import { FinalRegisterApi } from "../../../../core/services/api/RegisterApi";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Form3 = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const params = useParams();

	const handleSignUp = async (result) => {
		setLoading(true);
		const register = await FinalRegisterApi(result);
		register.success
			? toast.success(register.message, { style: { borderRadius: "5px" } })
			: toast.error(register.message, { style: { borderRadius: "5px" } });
		setTimeout(() => {
			setLoading(false);

			register.success && navigate("/Login");
		}, 2000);
	};

	return (
		<>
			<Toaster />
			<Formik
				initialValues={{
					phoneNumber: params.phoneNumber,
					gmail: "",
					password: "",
				}}
				validationSchema={FinalRegister}
				onSubmit={(e) => {
					handleSignUp(e);
				}}
			>
				{(props) => {
					return (
						<Form className="flex flex-col gap-5">
							<div className="flex flex-col gap-2">
								<Field
									placeholder="شماره همراه  خود را وارد کنید"
									name="phoneNumber"
									className={`p-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
										props.errors.phoneNumber &&
										"border-red-500 placeholder:text-red-500 "
									} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
								/>
								{/* <h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="phoneNumber" />
								</h2> */}
							</div>
							<div className="flex flex-col gap-2">
								<Field
									placeholder="جیمیل خود را وارد کنید"
									name="gmail"
									className={`p-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
										props.errors.gmail &&
										"border-red-500 placeholder:text-red-500 "
									} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
								/>
								{/* <h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="gmail" />
								</h2> */}
							</div>
							<div className="flex flex-col gap-2">
								<Field
									placeholder="رمز عبور خود را وارد کنید"
									type="password"
									name="password"
									className={`p-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
										props.errors.password &&
										"border-red-500 placeholder:text-red-500 "
									} focus:border-metricGray3 focus:placeholder:text-metricGray3`}
								/>
								{/* <h2 className="mr-5 text-red-500 text-sm font-bold">
									<ErrorMessage name="password" />
								</h2> */}
							</div>

							<button
								type="submit"
								className="group text-white font-semibold py-4 px-3  bg-metricBlack hover:bg-[#1C1D20]  rounded-full  flex items-center justify-center md:justify-start gap-10  transition-all duration-200 "
							>
								<div className="ml-2 w-8 h-8 hidden md:flex items-center justify-center ">
									<div
										className={`  text-xl text-[#1C1D20]  bg-white rounded-full w-2 h-2 flex items-center justify-center group-hover:w-8 group-hover:h-8 ${
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
								<div>تایید شماره همراه</div>
							</button>
							<NavLink
								to={"/Signup"}
								className="flex items-center gap-4 w-full justify-center text-2xl"
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

export default Form3;
