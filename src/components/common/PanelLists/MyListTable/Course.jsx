import { Link } from "react-router-dom";
import { dateModifier } from "../../../../core/utils/dateModifier";

const Course = ({ list }) => {
	return (
		<Link
			to={"/CourseDetails/" + list.courseId}
			className="w-full flex flex-row gap-5 md:grid grid-cols-6  items-center md:gap-0 lg:gap-5 py-4 sm:px-4 px-2  lg:pl-10	hover:bg-metricGray/20"
		>
			<div className="flex items-center justify-center w-28 sm:w-32  h-32 rounded-2xl  overflow-hidden">
				<img src={list.tumbImageAddress} className="w-full h-full" />
			</div>
			<div className="hidden md:flex lg:text-[14px] text-sm font-semibold text-metricBlack  item-center justify-center">
				<p className="truncate">{list.courseTitle}</p>
			</div>
			<div className="hidden md:flex lg:text-[14px] text-sm font-semibold text-metricBlack  item-center justify-center">
				<p className="truncate">{list.teacheName}</p>
			</div>
			<div className="hidden md:flex lg:text-[14px] text-sm font-semibold text-metricBlack  item-center justify-center">
				<p className="truncate">{dateModifier(list.lastUpdate)}</p>
			</div>
			<div className="hidden md:flex lg:text-[14px] text-sm font-semibold text-metricBlack  item-center justify-center">
				<p className="truncate">{list.typeName}</p>
			</div>
			<div className="text-xs font-semibold text-metricBlack hidden md:flex item-center justify-center truncat">
				مشاهده جزئیات
			</div>
			<div className="md:hidden flex flex-col justify-between gap-2 text-sm sm:max-w-full	 max-w-40">
				<div className="flex items-center gap-2 text-metricBlack ">
					<p className="text-gray-500 hidden sm:inline">عنوان:</p>
					<h1 className="text-base font-semibold truncate">
						{list.courseTitle}
					</h1>
				</div>
				<div className="flex items-center gap-2 text-metricBlack ">
					<p className="text-gray-500 hidden sm:inline">استاد:</p>
					<p className="truncate">{list.teacheName}</p>
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
		</Link>
	);
};
export default Course;
