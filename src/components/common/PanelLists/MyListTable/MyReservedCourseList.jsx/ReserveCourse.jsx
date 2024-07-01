import { useEffect, useState } from "react";
import { CourseDetailsAPI } from "../../../../../core/services/api/CourseDetails";
import { dateModifier } from "../../../../../core/utils/dateModifier";
import { Link } from "react-router-dom";

const ReserveCourse = ({ reserve }) => {
	const [CourseInfo, setCourseInfo] = useState();
	const getCourseInfo = async () => {
		const result = await CourseDetailsAPI(reserve.courseId);
		setCourseInfo(result);
	};
	useEffect(() => {
		getCourseInfo();
	}, []);
	return (
		<>
			{reserve && (
				<Link
					to={"/CourseDetails/" + reserve.courseId}
					className="w-full flex flex-row gap-5 md:grid grid-cols-6  items-center md:gap-0 lg:gap-5 py-4 sm:px-4 px-2  lg:pl-10	hover:bg-metricGray/20	"
				>
					<div className="flex items-center justify-center w-28 sm:w-32  h-32 rounded-2xl  overflow-hidden">
						{CourseInfo ? (
							<img src={CourseInfo.imageAddress} className="w-full h-full" />
						) : (
							<div className="w-32 h-32 rounded-xl bg-metricGray2 text-xs flex items-center justify-center">
								جزئیات این دوره لود نشد
							</div>
						)}
					</div>
					<div className="hidden md:flex lg:text-lg text-sm font-semibold text-metricBlack  item-center justify-center">
						<p className="truncate">{reserve.courseName}</p>
					</div>
					<div className="hidden md:flex lg:text-lg text-sm font-semibold text-metricBlack  item-center justify-center">
						<p className="truncate">
							{reserve.accept ? "تایید شده" : "تایید نشده"}
						</p>
					</div>
					<div className="hidden md:flex lg:text-lg text-sm font-semibold text-metricBlack  item-center justify-center">
						<p className="truncate">{dateModifier(reserve.reserverDate)}</p>
					</div>
					<div className="hidden md:flex lg:text-lg text-sm font-semibold text-metricBlack  item-center justify-center">
						<p className="truncate">
							{CourseInfo && <>{CourseInfo.cost.toLocaleString()} تومان</>}
						</p>
					</div>
					<div className="text-xs font-semibold text-metricBlack hidden md:flex item-center justify-center truncate">
						مشاهده جزئیات
					</div>
					<div className="md:hidden flex flex-col justify-between gap-2 text-sm max-w-40 sm:max-w-full">
						<div className="flex items-center gap-2 text-metricBlack ">
							<p className="text-gray-500 hidden sm:inline">عنوان:</p>
							<h1 className="text-base font-semibold truncate">
								{reserve.courseName}
							</h1>
						</div>
						<div className="flex items-center gap-2 text-metricBlack ">
							<p className="text-gray-500 hidden sm:inline">وضعیت:</p>
							<p className="truncate">
								{reserve.accept ? "تایید شده" : "تایید نشده"}
							</p>
						</div>
						<div className="flex items-center gap-2 text-metricBlack ">
							<p className="text-gray-500 hidden sm:inline">قیمت:</p>
							<p className="truncate">
								{CourseInfo && <>{CourseInfo.cost.toLocaleString()} تومان</>}
							</p>
						</div>

						<div className="flex items-center gap-2 text-metricBlack ">
							<p className="text-gray-500 hidden sm:inline">تاریخ :</p>{" "}
							<p className="truncate">
								<p className="truncate">{dateModifier(reserve.reserverDate)}</p>
							</p>
						</div>
					</div>
				</Link>
			)}
		</>
	);
};
export default ReserveCourse;
