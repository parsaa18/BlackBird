import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { FaCheck, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { BounceLoader, ClipLoader } from "react-spinners";
import { editProfileInfoApi } from "../../core/services/api/panel/editProfileInfo";
import toast, { Toaster } from "react-hot-toast";

const MediaLinks = () => {
	const [loading, setLoading] = useState(false);
	const { profile } = useSelector((s) => s.profile);
	console.log(profile);
	const handleSubmit = async (e) => {
		setLoading(true);
		const newProfile = { ...profile, ...e };
		const formData = new FormData();

		Object.entries(newProfile).map(([key, value]) => {
			value && formData.append(key, value);
		});
		const result = await editProfileInfoApi(formData);
		setLoading(false);
		console.log(result);
		result.success
			? toast.success(result.message)
			: toast.error(result.response.data.ErrorMessage[0]);
	};
	return (
		<>
			<Toaster />
			{Object.keys(profile).length !== 0 ? (
				<Formik
					initialValues={{
						telegramLink: profile.telegramLink,
						linkdinProfile: profile.linkdinProfile,
					}}
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<Form className="flex flex-col m-auto pt-2 gap-8 w-full sm:w-2/4">
						<div className="flex items-start gap-5 lg:items-center justify-between flex-col  lg:flex-row lg:gap-10 xl:gap-20">
							<label
								htmlFor="telegramLink"
								className="text-metricGray3 max-w-1/3 flex items-center gap-4 text-xl"
							>
								<FaTelegram className="text-3xl" />
								تلگرام
							</label>
							<Field
								name="telegramLink"
								id="telegramLink"
								className="px-5 py-3 w-full rounded-full border border-metricGray2 outline-none focus:border-metricGray3 transition-all duration-150 bg-metricWhite text-metricBlack text-sm"
								placeholder="لینک تلگرام خود را وارد کنید"
							/>
						</div>
						<div className="flex items-start gap-5 lg:items-center justify-between flex-col  lg:flex-row lg:gap-10 xl:gap-20">
							<label
								htmlFor="linkdinProfile"
								className="text-metricGray3 max-w-1/3  flex items-center gap-4 text-xl"
							>
								<FaLinkedin className="text-3xl" />
								لینکدین
							</label>
							<Field
								name="linkdinProfile"
								id="linkdinProfile"
								className="px-5 py-3 w-full rounded-full border border-metricGray2 outline-none focus:border-metricGray3 transition-all duration-150 bg-metricWhite text-metricBlack text-sm"
								placeholder="لینک لینکدین خود را وارد کنید"
							/>
						</div>

						<div className="flex justify-center items-center">
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
				</Formik>
			) : (
				<ClipLoader />
			)}
		</>
	);
};

export default MediaLinks;
