import { CgArrowLeft } from "react-icons/cg";
import { dateModifier } from "../../../../core/utils/dateModifier";
import { Link } from "react-router-dom";
const Article = ({ title, date, id, img }) => {
	return (
		<Link
			to={"/ArticleDetails/" + id}
			className="w-full flex flex-row gap-5 md:grid grid-cols-4  items-center md:gap-0 lg:gap-5 py-4 sm:px-4 px-2 pl-0 xl:pl-10	hover:bg-metricGray/20"
		>
			<div className="flex items-center justify-center max-w-28 sm:max-w-32 md:max-w-full  h-32 rounded-2xl  overflow-hidden">
				<img src={img} className="w-full h-full" />
			</div>
			<div className="hidden md:flex lg:text-[14px] text-sm font-semibold text-metricBlack  item-center justify-center ">
				<p className="truncate">{title}</p>
			</div>

			<div className="hidden md:flex lg:text-[14px] text-sm font-semibold text-metricBlack  item-center justify-center">
				{dateModifier(date)}
			</div>
			<Link
				to={"/ArticleDetails/" + id}
				className="text-lg font-semibold text-metricBlack w-full justify-center hidden md:flex items-center gap-2"
			>
				مشاهده بیشتر
				<CgArrowLeft />
			</Link>
			<div className="md:hidden flex flex-col justify-between gap-2 text-sm sm:max-w-full	 max-w-40">
				<div className="flex items-center gap-2 text-metricBlack ">
					<p className="text-gray-500 hidden sm:inline">عنوان:</p>
					<h1 className="text-base font-semibold truncate">{title}</h1>
				</div>

				<div className="flex items-center gap-2 text-metricBlack ">
					<p className="text-gray-500 hidden sm:inline">تاریخ :</p>{" "}
					<p className="truncate">{dateModifier(date)}</p>
				</div>
			</div>
		</Link>
	);
};
export default Article;
