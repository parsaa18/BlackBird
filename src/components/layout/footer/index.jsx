import MetricLogo from "../../../assets/logo";
import {
	IoMailOutline,
	IoCallOutline,
	IoArrowBackOutline,
} from "react-icons/io5";
import {
	PiFacebookLogo,
	PiWhatsappLogoLight,
	PiYoutubeLogoLight,
} from "react-icons/pi";
import Reveal from "../../common/reveal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
	const { darkMode } = useSelector((state) => {
		return state.darkMode;
	});
	return (
		<Reveal del={0.2} dur={0.5} dir={80}>
			<footer className="flex flex-col gap-5 items-start lg:mx-[40px]  bg-metricGray rounded-[2rem] p-8  max-w-[1400px] lg:my-[30px] ">
				<div className="w-36 col-span-5 cursor-pointer">
					<MetricLogo color={`${darkMode ? "#cacaca" : "#313131"}`} />
				</div>
				<div className="flex flex-col w-full justify-between  md:flex-row gap-5">
					<div className="flex flex-col items-start order-3 md:order-1 gap-10 ">
						<div className="flex flex-col gap-3 text-metricBlack ">
							<div className="flex gap-3 items-center lg:text-lg">
								<IoMailOutline className="text-metricBlack" />
								<p className="font-semibold">MetricAcademy@gmail.com</p>
							</div>
							<div className="flex gap-3 items-center lg:text-lg">
								<IoCallOutline className="text-metricBlack" />
								<p className="font-semibold ltr">+98 911 123 2121</p>
							</div>
						</div>
						<div className="flex gap-5 items-center font-semibold text-2xl">
							<PiFacebookLogo className="cursor-pointer text-metricBlack" />
							<PiWhatsappLogoLight className="cursor-pointer text-metricBlack" />
							<PiYoutubeLogoLight className="cursor-pointer text-metricBlack" />
						</div>
					</div>
					<ul className="flex flex-col items-start order-1 justify-center gap-4 font-semibold text-xs lg:text-base text-metricBlack">
						<li className="text-gray-400 pb-5">صفحات</li>
						<li>
							<Link to="/CoursesList?PageNumber=1"> دوره ها</Link>
						</li>
						<li>
							<Link to="/ArticlesList"> بلاگ ها</Link>
						</li>
						<li>مصاحبه ها</li>
					</ul>
					<ul className="flex flex-col items-start order-2 justify-center gap-4 font-semibold text-xs lg:text-base text-metricBlack">
						<li className="text-gray-400 pb-5">ما</li>
						<li>اساتید</li>
						<li>ارتباط با ما</li>
						<li>درباره ما</li>
					</ul>
					<div className="w-[140px] flex flex-col order-4 justify-center gap-5 text-metricBlack ">
						<h4 className="text-2xl font-extrabold">درباره ما سوالی دارید؟</h4>
						<div className="group flex items-center justify-center gap-3 cursor-pointer border border-black rounded-full py-2">
							<p className="text-sm text-nowrap">ارسال ایمیل</p>
							<div className="p-3 rounded-full bg-metricWhite group-hover:rotate-45 transition-all duration-300">
								<IoArrowBackOutline className="text-metricBlack" />
							</div>
						</div>
					</div>
				</div>
			</footer>
		</Reveal>
	);
};

export default Footer;
