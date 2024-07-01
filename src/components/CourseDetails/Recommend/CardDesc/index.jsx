import { SlDislike, SlLike } from "react-icons/sl";
import {
	HiOutlineUsers,
	HiOutlineCalendar,
	HiOutlineClock,
} from "react-icons/hi2";
import { VscMortarBoard } from "react-icons/vsc";
import { BiCoinStack } from "react-icons/bi";
import Tag from "../../../../components/common/Tag";

const CardDesc = ({
	title,
	likes,
	disLikes,
	tag,
	teacher,
	duration,
	students,
	price,
	date,
}) => {
	return (
		<div className=" p-3 flex flex-col gap-5 justify-between h-1/2">
			<div className="flex items-center w-full justify-between gap-2">
				<h2 className="flex-1 text-xl font-semibold truncate">{title}</h2>
			</div>

			<div className="flex items-center justify-between  text-metricBlack">
				<div className="tags flex items-center gap-1">
					<Tag name={tag} padding={" 5px 10px"} fontSize="12px" />
				</div>
				<div className="likes flex items-center gap-2 ">
					<div className="flex items-center gap-1 ">
						<img
							src="/src/assets/Icons/Landing/dislike.svg"
							className="w-5 h-5"
						/>
						{disLikes}
					</div>
					<div className="flex items-center gap-1">
						<img src="/src/assets/Icons/Landing/like.svg" className="w-5 h-5" />
						{likes}
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between text-metricBlack">
				<div className="flex items-center gap-2 text-xs font-semibold">
					<img src="/src/assets/Icons/CourseList/teacher.svg" className="w-5" />
					{teacher}
				</div>
				<div className="flex items-center gap-2 text-xs font-semibold">
					<img
						src="/src/assets/Icons/CourseDetails/timer.svg"
						className="w-5"
					/>
					{duration} ساعت
				</div>
				<div className="flex items-center gap-2 text-xs font-semibold ">
					<img
						src="/src/assets/Icons/CourseDetails/profile-2user.svg "
						className="w-5"
					/>
					{students} نفر
				</div>
			</div>

			<div className="flex py-2 items-center justify-between border-t  text-metricBlack border-gray-300">
				<div className="flex gap-1 items-center font-bold ">
					<img src="/src/assets/Icons/CourseList/coin.svg" className="w-6" />
					{price?.toLocaleString() + " تومان"}
				</div>
				<div className="flex gap-1 items-center text-sm">
					<img
						src="/src/assets/Icons/CourseDetails/calendar-tick.svg"
						className="w-5"
					/>
					{date}
				</div>
			</div>
		</div>
	);
};
export default CardDesc;
