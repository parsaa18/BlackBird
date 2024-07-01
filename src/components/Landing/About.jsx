import { useRef } from "react";
import star from "../../assets/Icons/Star about.svg";
import { slideUp } from "../common/anime/anime";
import { useInView, motion } from "framer-motion";
import MagneticButton from "../common/magneticButton";
import Gif from '../../assets/image/Landing/3d-casual-life-money-and-pie-chart.png'
import HappyMan from '../../assets/image/Landing/3d-casual-life-happy-man-and-website-window-in-laptop.png'
import Madrak from '../../assets/image/Landing/3d-casual-life-colleagues-in-an-office-space.png'
import Forsat from '../../assets/image/Landing/3d-casual-life-man-woman-chatting-with-speech-bubble-and-web-browser-windows.png'

const About = () => {
	const About =
		"آکادمی متریک یک اکادمی آنلاین برجسته است که دوره‌های پیشرفته برنامه‌نویسی را با استفاده از چندین سال تجربه و از بهترین اساتید در دنیا ارائه می‌دهد.";
	const description = useRef(null);
	const isInView = useInView(description);

	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="0.2"
			className="w-full rounded-3xl h-[2600px] sm:h-[1800px] lg:h-[1100px] bg-metricGray mt-[-150px] md:p-14 p-6 flex flex-col gap-32"
		>
			<div
				ref={description}
				className="about flex justify-between items-center"
			>
				<div
				className="w-[880px] flex lg:flex-row flex-col "
				>
					<p className="font-bold text-2xl md:text-3xl  md:w-[680px] leading-normal">
						{About.split("  ").map((word, index) => {
							return (
								<span key={index} className="inline-flex mr-[3px] text-metricBlack">
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
					</p>
					<div
					data-scroll
					data-scroll-speed='0.1'
					className="mt-20"
					>
						<MagneticButton width="120px" height="120px" >
							بیشتر بخوانید
						</MagneticButton>					
					</div>					
				</div>
				<img className="size-8 mb-10" src={star} alt="#" />
			</div>
			<div className="flex flex-col gap-16">
				<h4 className="md:text-4xl text-3xl text-center font-bold text-metricBlack">خدمات ما</h4>
				<div className="grid grid-cols-1 lg:grid-cols-10 lg:grid-rows-2 gap-7 grid-flow-row h-[500px]" >
						<div className=" bg-metricAqua lg:col-span-4 col-span-10 flex flex-col sm:flex-row  sm:justify-between justify-center lg:justify-around rounded-2xl px-6  py-6 lg:px-2 sm:px-10" >
							<div className=" w-56 flex flex-col gap-4" >
									<h2 className="font-bold text-2xl" >
									پنل اختصاصی دانشجو									
									</h2>
									<p className="text-justify w-52">
									پنل اختصاصی برای هر دانشجو که میتوانند ان را با دوستانشان به اشتراک بذارن									
									</p>
										<MagneticButton width="120px" height="46px" >
											<div className=" text-[13px]" >
												بیشتر بخوانید
											</div>
										</MagneticButton>									
								</div>
								<img 
								src={HappyMan}
								className="w-40 h-40 mt-5"
								/>
						</div>
						<div className="bg-metricYellow1 flex flex-col sm:flex-row justify-around lg:col-span-6 rounded-2xl py-5 col-span-10">
						<div className="pr-8 lg:pr-4 xl:pr-2 md:pr-0 w-[440px] flex flex-col gap-4" >
									<h2 className="font-bold text-2xl" >
									مدرک معتبر									
									</h2>
									<p className="lg:w-[350px] w-48">
									مدارک آموزشی معتبر نه تنها تایید مهارت ها و دانش شما را ارائه میدهند ، بلکه شانس شما برای ارتقا شغلی نیز افزایش می یابد								
									</p>
										<MagneticButton width="120px" height="46px" >
											<div className=" text-[13px]" >
												بیشتر بخوانید
											</div>
										</MagneticButton>									
								</div>
								<img 
								src={Madrak}
								className="w-44 h-44 mt-4 ml-4"
								/>
						</div>
						<div className=" bg-metricGray2 flex flex-col sm:flex-row justify-between lg:justify-around lg:col-span-3 rounded-2xl md:p-5  py-7 px-8 md:px-6 md:py-5 col-span-10" >
							<div className=" w-36 flex flex-col gap-4" >
								<h2 className="font-bold text-2xl" >
									سادگی خدمات
								</h2>
								<p>
								دسترسی به خدمات به آسانی ممکن است
								</p>
									<MagneticButton width="120px" height="46px" >
										<div className=" text-[13px]" >
											بیشتر بخوانید
										</div>
									</MagneticButton>									
							</div>
							<img 
							src={Gif}
							className="w-32 h-44 mt-5"
							/>							
						</div>
						<div className="bg-metricOrange flex flex-col sm:flex-row justify-around lg:col-span-7 rounded-2xl md:py-5 py-8 col-span-10">
							<div className=" w-[470px] flex flex-col gap-4 xl:pr-2 md:px-0 lg:pr-4 px-14" >
										<h2 className="font-bold text-2xl" >
										فرصت های شغلی										
										</h2>
										<p className="w-[180px] md:w-[325px] text-justify ">
											فرصت های شغلی در تمامی شرکت های داخلی و خارجی با مزایای مناسب هر فرد برای اینده ای روشن
										</p>
											<MagneticButton width="120px" height="46px" >
												<div className=" text-[13px]" >
													بیشتر بخوانید
												</div>
											</MagneticButton>									
									</div>
									<img 
									src={Forsat}
									className="w-64 h-44 mt-4 ml-4"
									/>
						</div>						
				</div>

			</div>
		</div>
	);
};

export { About };
