import { Field, Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import {
	EditSecurityApi,
	GetSecurityInfoApi,
} from "../../../core/services/api/panel/twoStepVerification";
import { AnimatePresence, motion } from "framer-motion";
import { BounceLoader, ClipLoader } from "react-spinners";
import { FaCheck } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ChangeRecoveryApi } from "../../../core/services/api/panel/changeRecovery";
const TwoStepVerification = () => {
	const [SecurityParams, setSecurityParams] = useState({
		twoStepAuth: false,
		recoveryEmail: "",
	});
	const [loading, setLoading] = useState(false);
	const [getloading, setGetLoading] = useState(false);
	const params = useParams();
	const EditSecurity = async (formOutput) => {
		const obj = {
			...formOutput,
			baseUrl: "http://localhost:5173/DashBoard/Security/TwoStepVerification",
		};
		setLoading(true);
		const result = await EditSecurityApi(obj);
		result.success && toast.success(result.message);
		setLoading(false);
	};
	console.log();
	const getSecurity = async () => {
		setGetLoading(true);
		const result = await GetSecurityInfoApi();
		setSecurityParams(result);
		setGetLoading(false);
	};
	const changeRecovery = async (config) => {
		console.log(config);
		const result = await ChangeRecoveryApi(config);
		console.log(result);
		result.success
			? toast.success(result.message)
			: toast.error(result.message);
	};
	useEffect(() => {
		getSecurity();
		params.configValue && changeRecovery(params.configValue);
	}, []);
	return (
		<>
			<Toaster />
			<div className="flex items-center justify-center w-full ">
				{getloading ? (
					<ClipLoader size={50} />
				) : (
					<Formik
						initialValues={{
							twoStepAuth: SecurityParams.twoStepAuth,
							recoveryEmail: SecurityParams.recoveryEmail,
						}}
						onSubmit={(e) => {
							EditSecurity(e);
						}}
					>
						{({ values }) => {
							return (
								<Form className="flex flex-col gap-5 w-full px-0 md:px-10 xl:px-40 transition-all duration-150 ">
									<div className="flex items-center gap-2">
										<Field
											name="twoStepAuth"
											type="checkbox"
											id="twoStepAuth"
											className="peer px-5 py-3  rounded-full border border-metricGray2 outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
										/>
										<label htmlFor="twoStepAuth" className="text-metricGray3">
											فعال کردن احراز هویت دو مرحله ای
										</label>
									</div>
									<AnimatePresence mode="wait">
										{values.twoStepAuth && (
											<motion.div
												initial={{ y: -10, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												exit={{ y: -10, opacity: 0 }}
												className="flex flex-col gap-2"
											>
												<label
													htmlFor="recoveryEmail"
													className="text-metricGray3"
												>
													ایمیل پشتیبان
												</label>
												<Field
													name="recoveryEmail"
													id="recoveryEmail"
													className="px-5 py-3 bg-metricWhite text-metricBlack  rounded-full border border-metricGray2 outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
													placeholder="ایمیل خود را وارد کنید"
												/>
											</motion.div>
										)}
									</AnimatePresence>
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
											<div>اعمال تغییرات</div>
										</button>
									</div>
								</Form>
							);
						}}
					</Formik>
				)}
			</div>
		</>
	);
};

export default TwoStepVerification;
