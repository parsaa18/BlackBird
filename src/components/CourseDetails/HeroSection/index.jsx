import AboutCourse from "./AboutCourse";
import ImageCourse from "./ImageCourse";
import InformationCourse from "./InformationCourse";
import TeacherSection from "./TeacherSection";
import TitleCourse from "./TitleCourse";
import { dateModifier } from "../../../core/utils/dateModifier";
import Modal from "../../common/Modal";
import ModalIcon from "../../../assets/Icons/CourseDetails/vuesax/linear/ModalIcon.svg";
import { useState } from "react";
import MagneticButton from "../../common/magneticButton";
import Magnetic from "../../common/magnetic";
import { Link } from "react-router-dom";

const HeroCourseDetail = ({ data, setData, FlagHandler }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed="-0.55"
				className="min-h-[87vh] flex flex-col gap-3"
			>
				<TitleCourse data={data} setData={setData} FlagHandler={FlagHandler} />
				<div className="w-full min-h-[380px] grid  grid-cols-10 gap-3 xl:gap-6 px-8 py-5">
					<div className="col-span-10 sm:col-span-5 lg:col-span-3 flex flex-col gap-5">
						<AboutCourse about={data.miniDescribe} />
						<TeacherSection name={data.teacherName} />
					</div>
					<div className="col-span-10 sm:col-span-5 lg:col-span-3">
						<InformationCourse
							openModal={openModal}
							price={data.cost}
							dateStart={dateModifier(data.startTime)}
							capacity={data.capacity}
							registed={data.currentRegistrants}
						/>
					</div>
					<div className=" col-span-10 lg:col-span-4">
						<ImageCourse image={data.imageAddress} />
					</div>
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				width="420px"
				height="350px"
			>
				<div className="flex flex-col justify-center items-center">
					<p className="font-medium text-center w-60 rounded-md py-1 text-[#64ce5a] bg-[#b9ffb6] ">
						دوره شما با موفقیت رزرو شد!
					</p>
					<img src={ModalIcon} className="mt-4" />
					<div className="flex flex-row-reverse w-full justify-end gap-[6.7rem] font-medium text-sm mt-3">
						<h2>رزرو های من</h2>
						<h2>دوره های من</h2>
					</div>
					<p className="pt-7 text-center w-64 font-medium">
						با تایید ادمین این دوره به لیست دوره های من اضافه میشود
					</p>
					<div className="flex flex-row-reverse justify-between pt-6 w-full">
						<Link to={"/DashBoard/MyReservedCourses"}>
							<MagneticButton width="260px" height="48px">
								<h2 className="font-medium text-sm">برو به رزرو های من</h2>
							</MagneticButton>
						</Link>
						<Magnetic>
							<button
								onClick={closeModal}
								className="font-medium text-sm bg-metricGray w-28  rounded-full"
							>
								باشه!
							</button>
						</Magnetic>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default HeroCourseDetail;
