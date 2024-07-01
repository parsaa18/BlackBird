import ImageContainer from "./imageContainer";
import { Rating } from "@material-tailwind/react";

const Main = ({ image, disc }) => {
	return (
		<section className="flex flex-col gap-5">
			<ImageContainer image={image} />
			<div className="text-sm md:text-lg px-5 py-5 text-justify text-metricBlack ">
				{disc}
			</div>
			<div className="flex items-center gap-1 text-lg font-bold">
				<img src="/src/assets/image/star.png" className="w-7 h-7" />
				امتیاز بدید:
				<Rating value={5} className="w-6 flex text-yellow-300" />
			</div>
		</section>
	);
};
export default Main;
