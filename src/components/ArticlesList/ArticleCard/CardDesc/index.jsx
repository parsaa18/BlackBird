import Tag from "../../../common/Tag";
import eyes from "../../../../assets/Icons/Landing/eye.svg";
import dateIcon from "../../../../assets/Icons/Landing/calendar-2.svg";
import Like from "../../../../assets/Icons/Landing/like.svg";

const CardDesc = ({ title, view, tag, description ,likeCount, date }) => {
	return (
		<div className=" px-4 flex flex-col h-1/2 ">
			<div className="flex py-3 items-center w-full justify-between gap-4">
				<h2 className="text-base lg:text-xl font-semibold truncate">{title}</h2>
			</div>
			<div className="flex items-center gap-2 flex-wrap max-w-[70%]">
				<Tag name={tag} padding={" 5px 15px"} fontSize={"12px"} />
			</div>
			<div className="flex py-2 justify-between items-center">
				<div className="flex items-center text-xs text-metricBlack md:text-base gap-1">
					{likeCount}
					<img src={Like} className="w-4" />
				</div>
				<div className=" flex items-center text-xs text-metricBlack md:text-base  gap-1">
					{view}
					<img src={eyes} className="w-4" />
				</div>
				<div className="text-xs text-metricBlack md:text-base flex gap-2 items-center">
					{date}
					<img src={dateIcon} className="w-4" />
				</div>
			</div>

			<div className="text-xs lg:text-sm text-gray-500 px-1  text-start flex py-3 items-center justify-between border-t border-gray-300 max-h-[80px]">
				{description}
			</div>
		</div>
	);
};
export default CardDesc;
