import { Field, Form, Formik } from "formik";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import { BounceLoader } from "react-spinners";
import { ChangePasswordApi } from "../../../core/services/api/panel/changePass";
import { useDispatch, useSelector } from "react-redux";
import { setLoginInfo } from "../../../core/provider/Login/login";
import { useNavigate } from "react-router-dom";
import { setNewToken } from "../../../core/services/MultiAccount/setNewToken";

const ChangePassword = () => {
	const [loading, setLoading] = useState();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChangePassword = async (e) => {
		setLoading(true);
		const result = await ChangePasswordApi(e);
		setLoading(false);
		console.log(result.phoneNumber);
		console.log(e.newPassword);

		if (result.success) {
			toast.success(result.message);
			if (result.token) {
				setNewToken(result.token);
			} else {
				const obj = {
					phoneOrGmail: result.phoneNumber,
					password: e.newPassword,
					rememberMe: true,
				};
				dispatch(setLoginInfo(obj));
				setTimeout(() => {
					navigate("step2");
				}, 1000);
			}
		} else {
			toast.error(result.message);
		}
	};
	return (
		<>
			<Toaster />
			<div className="flex items-center justify-center w-full ">
				<Formik
					initialValues={{
						oldPassword: "",
						newPassword: "",
					}}
					onSubmit={handleChangePassword}
				>
					<Form className="w-full px-10 xl:px-40 flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<label htmlFor="oldPassword" className="text-metricGray3">
								رمز عبور قدیمی
							</label>
							<Field
								name="oldPassword"
								id="oldPassword"
								className="px-5 py-3  rounded-full border border-metricGray2 outline-none focus:border-metricGray3 bg-metricWhite transition-all duration-150 text-sm"
								placeholder="رمز عبور قدیمی خود را وارد کنید"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="newPassword" className="text-metricGray3">
								رمز عبور جدید
							</label>
							<Field
								name="newPassword"
								id="newPassword"
								className="px-5 py-3  rounded-full border border-metricGray2 outline-none focus:border-metricGray3 bg-metricWhite transition-all duration-150 text-sm"
								placeholder="رمز عبور جدید خود را وارد کنید"
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
								<div>تغییر رمز عبور</div>
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default ChangePassword;
