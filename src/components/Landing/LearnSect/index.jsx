import MagneticButton from "../../common/magneticButton";
import { GoArrowUpRight } from "react-icons/go";
import Eyes from "./Eyes";
import { slideUp } from "../../common/anime/anime";
import { useInView, motion } from "framer-motion";

import { useRef } from "react";
import { Link } from "react-router-dom";

const LearnSection = () => {
	const title = useRef(null);
	const isInView = useInView(title);

	const Learn = "همین حالا از دوره های مبتدی ما شروع به یادگیری کن";
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="0.3"
			className="flex items-center justify-center w-full min-h-screen py-20 bg-[#CDEA68] my-10 mt-[-50px] rounded-3xl "
		>
			<div ref={title} className="flex-col flex  w-[900px] gap-10">
				<h2 className="md:text-[7rem] text-[4.5rem] md:px-0 px-4 font-black text-center leading-normal text-[#212121]">
					{Learn.split(" ").map((word, index) => {
						return (
							<span key={index} className="inline-flex mr-[3px]">
								<motion.span
									variants={slideUp}
									custom={index}
									animate={isInView ? "open" : "closed"}
									key={index}
								>
									{word}
								</motion.span>
							</span>
						);
					})}
				</h2>
				<div
					data-scroll
					data-scroll-speed="0.07"
					className="flex items-center justify-center"
				>
					<Link to="/CoursesList?PageNumber=1">
						<MagneticButton width="240px" height="60px">
							<div className="flex items-center w-[220px] h-[60px] text-xl group">
								<div className="ml-10 w-10 h-10 flex items-center justify-center">
									<div className=" text-xl text-[#1C1D20]  bg-white rounded-full w-2 h-2 flex items-center justify-center group-hover:w-10 group-hover:h-10 transition-all duration-300">
										<GoArrowUpRight className="opacity-0 group-hover:opacity-100" />
									</div>
								</div>
								شروع یادگیری
							</div>
						</MagneticButton>
					</Link>
				</div>
			</div>
			<Eyes />
		</div>
	);
};

export default LearnSection;
