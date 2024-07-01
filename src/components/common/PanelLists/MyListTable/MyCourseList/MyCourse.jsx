import { Link } from "react-router-dom";
import { dateModifier } from "../../../../../core/utils/dateModifier";
import { useState } from "react";
import Modal from "../../../Modal";
import { AnimatePresence } from "framer-motion";
import PaymentModal from "./PaymentModal";

const MyCourse = ({ list }) => {
	const [open, setOpen] = useState(false);
	console.log(list);
	return (
		<>
			<div className="w-full flex flex-row gap-5 md:grid grid-cols-6  items-center md:gap-0 lg:gap-5 py-4 sm:px-4 px-2  lg:pl-10	hover:bg-metricGray/20 cursor-pointer">
				<Link
					to={"/CourseDetails/" + list.courseId}
					className="flex items-center justify-center w-28 sm:w-32  h-32 rounded-2xl  overflow-hidden"
				>
					<img src={list.tumbImageAddress} className="w-full h-full" />
				</Link>
				<Link
					to={"/CourseDetails/" + list.courseId}
					className=" hidden md:flex lg:text-lg text-sm font-semibold text-metricBlack  item-center justify-center "
				>
					<p className="truncate">{list.courseTitle}</p>
				</Link>
				<Link
					to={"/CourseDetails/" + list.courseId}
					className="hidden md:flex lg:text-base text-sm font-semibold text-metricBlack  item-center justify-center truncate"
				>
					{dateModifier(list.lastUpdate)}
				</Link>
				<Link
					to={"/CourseDetails/" + list.courseId}
					className="hidden md:flex lg:text-lg text-sm font-semibold text-metricBlack  item-center justify-center truncate"
				>
					{list.statusName}
				</Link>

				<Link
					to={"/CourseDetails/" + list.courseId}
					className="hidden md:flex lg:text-lg text-sm font-semibold text-metricBlack  item-center justify-center truncate"
				>
					{list.typeName}
				</Link>
				<div className="text-xs font-semibold text-metricBlack hidden md:flex item-center justify-center truncate">
					{list.paymentStatus !== "پرداخت نشده" ? (
						<div className="bg-green-400 py-2 px-5 rounded-full">
							پرداخت شده
						</div>
					) : (
						<div
							onClick={() => {
								setOpen(true);
							}}
							className="bg-metricOrange py-2 px-5 rounded-full"
						>
							پرداخت شهریه
						</div>
					)}
				</div>
				<div className="md:hidden flex flex-col justify-between gap-2 text-sm max-w-40 sm:max-w-full">
					<div className="flex items-center gap-2 text-metricBlack ">
						<p className="text-gray-500 hidden sm:inline">عنوان:</p>
						<h1 className="text-base font-semibold truncate">
							{list.courseTitle}
						</h1>
					</div>
					<div className="flex items-center gap-2 text-metricBlack ">
						<p className="text-gray-500 hidden sm:inline">وضعیت:</p>
						<p className="truncate">{list.statusName}</p>
					</div>
					<div className="flex items-center gap-2 text-metricBlack ">
						<p className="text-gray-500 hidden sm:inline">برگذاری:</p>
						<p className="truncate">{list.typeName}</p>
					</div>

					<div className="flex items-center gap-2 text-metricBlack ">
						<p className="text-gray-500 hidden sm:inline">تاریخ :</p>{" "}
						<p className="truncate">{dateModifier(list.lastUpdate)}</p>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{open && (
					<Modal
						isOpen={open}
						height="450px"
						onClose={() => {
							setOpen(false);
						}}
					>
						<PaymentModal
							cost={list.cost}
							id={list.courseId}
							name={list.courseTitle}
						/>
					</Modal>
				)}
			</AnimatePresence>
		</>
	);
};
export default MyCourse;
