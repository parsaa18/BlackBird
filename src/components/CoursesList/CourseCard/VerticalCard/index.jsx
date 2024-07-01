import { IoArrowBackOutline } from "react-icons/io5";
import CardDesc from "./CardDesc";
import CardImg from "./CardImage";
import Arrow from "../../../../assets/Icons/CourseList/arrow-right.svg";

const VCard = ({
	image,
	setModal,
	index,
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
		<div
			style={{ direction: "rtl" }}
			className="relative flex flex-col h-[380px] md:h-[410px]  cursor-pointer  bg-metricWhite2 rounded-[40px] overflow-hidden "
		>
			<CardImg image={image} />
			<CardDesc
				title={title}
				likes={likes}
				disLikes={disLikes}
				tag={tag}
				teacher={teacher}
				duration={duration}
				students={students}
				price={price}
				date={date}
			/>
			<div className="p-2 rounded-full bg-white absolute top-4 left-4 shadow-sm shadow-gray-400">
				<img src={Arrow} className="w-5" />
			</div>
		</div>
	);
};

export default VCard;
