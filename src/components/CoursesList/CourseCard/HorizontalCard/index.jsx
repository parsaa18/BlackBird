import { IoArrowBackOutline } from "react-icons/io5";
import CardDesc from "./CardDesc";
import CardImg from "./CardImage";
import Arrow from "../../../../assets/Icons/CourseList/arrow-right.svg";

const HCard = ({
	setModal,
	index,
	image,
	title = "ری اکت جی اس",
	likes = 30,
	disLikes = 0,
	tag = ["برنامه نویسی", "مبتدی", "ری اکت", "جاوا اسکریپت"],
	teacher = "بحر العوم",
	duration = "14 ساعت",
	students = 144,
	price = 300000,
	date = "5 خرداد",
	disc,
}) => {
	return (
		<div
			style={{ direction: "rtl" }}
			className="relative flex cursor-pointer h-[230px] md:h-[260px]  bg-metricWhite2 rounded-3xl md:rounded-[40px] overflow-hidden "
			onMouseEnter={() => {
				setModal({ active: true, index: index });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index: index });
			}}
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
				disc={disc}
			/>
			<div className="p-2 rounded-full bg-white absolute top-5 left-5 ">
				<img src={Arrow} className="md:w-5 w-3" />
			</div>
		</div>
	);
};
export default HCard;
