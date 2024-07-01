import Arrow from "../../../assets/Icons/CourseList/arrow-right.svg";
import CardDesc from "./CardDesc";
import CardImg from "./CardImage";

const ArticleCard = ({
	setModal,
	index,
	image,
	title = "خوب خواندن",
	view = 200,
	tag,
	date = "5 خرداد",
	likeCount,
	description = "بهترین دوره ها از بهترین اساتید دنیا برای شما ایجاد شده است تا بتوانید به پتانسیل خود برسید",
}) => {
	return (
		<div
			style={{ direction: "rtl" }}
			className="relative flex flex-col h-[420px] cursor-pointer bg-metricWhite2 overflow-hidden rounded-[40px] "
		>
			<CardImg image={image} />
			<CardDesc
				title={title}
				view={view}
				tag={tag}
				likeCount={likeCount}
				description={description}
				date={date}
			/>
			<div className="p-2 rounded-full bg-white absolute top-4 left-4 shadow-sm shadow-gray-400">
				<img src={Arrow} className="w-5" />
			</div>
		</div>
	);
};

export default ArticleCard;
