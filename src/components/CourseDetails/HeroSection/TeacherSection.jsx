import teacherImg from "../../../assets/Icons/Landing/Teacher.jpg";
import { Rating } from "@material-tailwind/react";

4;
const TeacherSection = ({ name }) => {
	return (
		<div className="bg-metricGray/50 rounded-3xl row-span-6 flex flex-col gap-3 h-full w-full p-4">
			<div className="tag border border-metricGray3 w-[88px] rounded-full h-7 flex justify-center items-center text-[12px]">
				مدرس دوره
			</div>
			<div className="image&name flex items-center gap-4">
				<div className="w-24 h-[75px] rounded-xl bg-metricGray2 overflow-hidden">
					<img src={teacherImg} className="w-full h-full" />
				</div>
				<div className="flex flex-col gap-2">
					<div>
						<h2 className="text-sm md:text-lg leading-normal">{name}</h2>
						<h4 className="text-xs md:text-sm text-metricGray3 leading-normal">
							دکتری هوش مصنوعی
						</h4>
					</div>
					<div className="star">
						<Rating value={5} className="w-3  md:w-6 flex text-yellow-300" />
					</div>
				</div>
			</div>
			<div>
				<p className="text-xs md:text-sm text-metricGray3 text-justify">
					یکی از بهترین اساتید آموزش و پرورش که از سال 1375 در مقاطع مختلف تدریس
					می کند سابقه تدریس در زمینه...
				</p>
			</div>
		</div>
	);
};

export default TeacherSection;
