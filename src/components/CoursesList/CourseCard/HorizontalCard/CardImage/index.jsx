import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlineImageNotSupported } from "react-icons/md";
const CardImg = ({ image = "/src/assets/image/CourseH.jpg" }) => {
	return (
		<div className="relative flex items-center justify-center min-h-full w-2/5 rounded-2xl bg-metricOrange overflow-hidden ">
			{image ? (
				<img src={image} className="h-full w-full" />
			) : (
				<div className="flex flex-col items-center justify-center gap-3 md:text-sm text-xs text-center font-semibold text-metricBlack">
					<MdOutlineImageNotSupported className="md:text-6xl text-3xl" />
					عکس از دوره موجود نیست
				</div>
			)}
		</div>
	);
};
export default CardImg;
