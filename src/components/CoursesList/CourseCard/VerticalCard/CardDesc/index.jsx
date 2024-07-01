import { SlDislike, SlLike } from "react-icons/sl";
import {
	HiOutlineUsers,
	HiOutlineCalendar,
	HiOutlineClock,
} from "react-icons/hi2";
import { VscMortarBoard } from "react-icons/vsc";
import { BiCoinStack } from "react-icons/bi";
import Tag from "../../../../common/Tag";

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
		<div className=" p-3 flex flex-col gap-5 justify-between h-1/2 text-metricBlack">
			<div className="flex items-center w-full justify-between gap-2">
				<h2 className="flex-1 text-base md:text-xl font-semibold truncate">
					{title}
				</h2>
			</div>

			<div className="flex items-center justify-between ">
				<div className="tags flex items-center gap-1">
					{tag.map((e, i) => {
						return (
							<Tag key={i} name={e} padding={" 5px 10px"} fontSize="12px" />
						);
					})}
				</div>
				<div className="likes flex items-center gap-2 ">
					<div className="flex items-center gap-1 ">
						<img src="/src/assets/image/dislike.png" className="w-5 h-5" />
						{disLikes}
					</div>
					<div className="flex items-center gap-1">
						<img src="/src/assets/image/like.png" className="w-5 h-5" />
						{likes}
					</div>
				</div>
			</div>

			<div className="flex items-center gap-1 justify-between">
				<div className="flex items-center gap-2 truncate text-xs font-semibold">
					<img src="/src/assets/image/teacher.png" className="w-5" />
					{teacher}
				</div>
				<div className="flex items-center gap-2 truncate text-xs font-semibold">
					<img src="/src/assets/image/timer2.png" className="w-5" />
					{duration} ساعت
				</div>
				<div className="flex items-center gap-2 truncate text-xs font-semibold ">
					<img src="/src/assets/image/profile-2user2.png " className="w-5" />
					{students} نفر
				</div>
			</div>

			<div className="flex py-2 items-center justify-between border-t border-gray-300">
				<div className="flex gap-1 items-center md:text-base text-xs font-bold ">
					<img src="/src/assets/image/coin.png" className="w-6" />
					{price?.toLocaleString() + " تومان"}
				</div>
				<div className="flex gap-1 items-center text-xs md:text-sm">
					<img src="/src/assets/image/calendar-tick.png" className="w-5" />
					{date}
				</div>
			</div>
		</div>
	);
};
export default CardDesc;
