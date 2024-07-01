import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./scroller.css";
import { FaCheck } from "react-icons/fa6";
import ShamsiDatePicker from "./DatePicker/DatePicker";
import { EditProfileValidation } from "../../core/validation/EditProfile";
import { BounceLoader, ClipLoader } from "react-spinners";
import { editProfileInfoApi } from "../../core/services/api/panel/editProfileInfo";
import { formDataModifier } from "../../core/utils/formDataModifier";
import toast, { Toaster } from "react-hot-toast";

const EditProfileForm = () => {
	const [loading, setLoading] = useState(false);
	const { profile, fName, lName, phoneNumber, email, nationalID } = useSelector(
		(s) => s.profile
	);
	const updateProfile = async (values) => {
		setLoading(true);
		const newObj = { ...profile, ...values };
		const result = await editProfileInfoApi(formDataModifier(newObj));
		setLoading(false);
		result.success && toast.success(result.message);
	};
	return (
		<>
			<Toaster />
			{profile.email ? (
				<Formik
					initialValues={{
						fName: profile["fName"],
						lName: profile["lName"],
						birthDay: profile.birthDay,
						phoneNumber: profile["phoneNumber"],
						nationalCode: profile["nationalCode"],
						email: profile["email"],
						homeAdderess: profile["homeAdderess"],
						userAbout: profile["userAbout"],
						gender: profile["gender"],
					}}
					// validationSchema={EditProfileValidation}
					onSubmit={updateProfile}
				>
					{({ values, setFieldValue }) => {
						return (
							<Form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-10 w-full">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="fName"
										className="text-metricGray3 flex items-center gap-2"
									>
										نام{" "}
										<h2 className="text-red-500 text-xs">
											<ErrorMessage name="fName" />
										</h2>
									</label>
									<Field
										name="fName"
										id="fName"
										className="px-5 py-3 w-full rounded-full border border-metricGray2 text-metricBlack bg-metricWhite outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
										placeHolder="نام خود را وارد کنید"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="lName"
										className="text-metricGray3 flex items-center gap-2"
									>
										نام خانوادگی{" "}
										<h2 className="text-red-500 text-xs">
											<ErrorMessage name="lName" />
										</h2>
									</label>
									<Field
										name="lName"
										id="lName"
										className="px-5 py-3 w-full rounded-full border border-metricGray2 text-metricBlack bg-metricWhite outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
										placeHolder="نام خانوادگی خود را وارد کنید"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="birthDay"
										className="text-metricGray3 flex items-center gap-2"
									>
										تاریخ تولد{" "}
										<h2 className="text-red-500 text-xs">
											<ErrorMessage name="birthDay" />
										</h2>
									</label>
									<Field
										name="birthDay"
										id="birthDay"
										component={ShamsiDatePicker}
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="nationalCode"
										className="text-metricGray3 flex items-center gap-2"
									>
										کد ملی{" "}
										<h2 className="text-red-500 text-xs">
											<ErrorMessage name="nationalCode" />
										</h2>
									</label>
									<Field
										name="nationalCode"
										id="nationalCode"
										className="px-5 py-3 w-full rounded-full border border-metricGray2 text-metricBlack bg-metricWhite outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
										placeHolder="کد ملی خود را وارد کنید"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="phoneNumber"
										className="text-metricGray3 flex items-center gap-2"
									>
										شماره تلفن{" "}
										<h2 className="text-red-500 text-xs">
											<ErrorMessage name="phoneNumber" />
										</h2>
									</label>
									<Field
										name="phoneNumber"
										id="phoneNumber"
										className="px-5 py-3 w-full rounded-full border border-metricGray2 text-metricBlack bg-metricWhite outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
										placeHolder="شماره تلفن خود را وارد کنید"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="email"
										className="text-metricGray3 flex items-center gap-2"
									>
										ایمیل{" "}
										<h2 className="text-red-500 text-xs">
											<ErrorMessage name="email" />
										</h2>
									</label>
									<Field
										name="email"
										id="email"
										className="px-5 py-3 w-full rounded-full border border-metricGray2 text-metricBlack bg-metricWhite outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
										placeHolder="ایمیل خود را وارد کنید"
									/>
								</div>
								<div className="flex flex-col gap-2 col-span-1 md:col-span-2 lg:col-span-3">
									<label
										htmlFor="homeAdderess"
										className="text-metricGray3 flex items-center gap-2"
									>
										آدرس محل سکونت{" "}
										<h2 className="text-red-500 text-xs">
											<ErrorMessage name="homeAddress" />
										</h2>
									</label>
									<Field
										name="homeAdderess"
										id="homeAdderess"
										className="px-5 py-3 w-full rounded-full border border-metricGray2 text-metricBlack bg-metricWhite outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
										placeHolder="آدرس خود را وارد کنید"
									/>
								</div>
								<div className="flex flex-col gap-2 col-span-1 md:col-span-2 lg:col-span-3">
									<label
										htmlFor="userAbout"
										className="text-metricGray3 flex items-center gap-2"
									>
										درباره من{" "}
										<h2 className="text-red-500 text-xs">
											<ErrorMessage name="userAbout" />
										</h2>
									</label>
									<Field
										as="textarea"
										name="userAbout"
										id="userAbout"
										className="px-5 py-3  rounded-3xl resize-none h-40 border border-metricGray2 text-metricBlack bg-metricWhite outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
										placeHolder="اطلاعات درمورد خود را وارد کنید"
									/>
								</div>

								<div className="text-metricBlack">
									<div className="flex flex-col gap-2 col-span-3">
										<div className="text-metricGray3 flex items-center gap-2">
											جنسیت
										</div>
										<div className="flex items-center gap-3">
											<label
												htmlFor="male"
												className="flex items-center gap-2 group cursor-pointer"
											>
												<Field
													type="radio"
													value={true}
													name="gender"
													id="male"
													checked={values.gender === true}
													onChange={() => setFieldValue("gender", true)}
													className="peer hidden"
												/>
												<div className="w-5 h-5 border-4 border-metricGray2 outline-none group-hover:bg-metricWhite transition-all duration-150 rounded-full bg-metricGray2 peer-checked:bg-metricOrange"></div>
												مرد
											</label>
											<label
												htmlFor="female"
												className="flex items-center gap-2 group cursor-pointer"
											>
												<Field
													type="radio"
													value={false}
													name="gender"
													id="female"
													checked={values.gender === false}
													onChange={() => setFieldValue("gender", false)}
													className="peer hidden"
												/>
												<div className="w-5 h-5 border-4 border-metricGray2 outline-none group-hover:bg-metricWhite transition-all duration-150 rounded-full bg-metricGray2 peer-checked:bg-metricOrange"></div>
												زن
											</label>
										</div>
									</div>
								</div>
								<div className="flex items-center col-span-1 md:col-span-2  justify-end px-40">
									<button
										type="submit"
										className="group text-white py-2 px-4  gap-1 text-sm  bg-[rgb(23,23,23)] hover:bg-[#1C1D20]  rounded-full  flex  items-center text-nowrap min-w-40  transition-all duration-200 "
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
			) : (
				<div className="flex items-center justify-center w-full h-full">
					<ClipLoader size={40} />
				</div>
			)}
		</>
	);
};

export default EditProfileForm;
