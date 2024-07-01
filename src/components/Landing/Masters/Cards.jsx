import { HiUser } from "react-icons/hi";
import Star from "../../../assets/Icons/Landing/Star.svg";
import MagneticButton from "../../common/magneticButton";

const Cards = ({ data, index }) => {
	console.log(data.pictureAddress);
	return (
		<div className=" bg-metricGray4 rounded-3xl md:p-5 p-8 flex flex-col gap-8 lg:gap-0 justify-between">
			<div className="section1 flex justify-between items-center">
				<div className=" bg-metricWhite w-11 h-11 rounded-full font-semibold text-xl flex justify-center items-center pt-1 mr-2 text-metricBlack">
					{index}
				</div>
				<div className="flex font-semibold text-2xl items-center justify-around w-14">
					4
					<img src={Star} className="w-7 mb-1" alt="Score" />
				</div>
			</div>
			<div className="section2 py-3 md:py-0 flex gap-3 items-center">
				<div className="image">
					{data.pictureAddress !== "Not-set" ? (
						<img src={data.pictureAddress} className=" rounded-full w-[60px]" />
					) : (
						<div className="border border-metricBlack p-4 rounded-full">
							<HiUser className="text-metricBlack" />
						</div>
					)}
				</div>
				<div className="name flex flex-col gap-1">
					<h2 className=" font-bold">{data.fullName}</h2>
					<h4 className=" font-medium text-sm text-metricGray3">
						دکتری هوش مصنوعی
					</h4>
				</div>
			</div>
			<div className="section3 flex flex-col gap-4">
				<h2 className=" font-bold">فکر میکنید در چه دنیای به سر می بریم؟</h2>
				<p className=" text-justify text-[14px]">
					دنیا روز به روز درحال تغییر است و نمیشود جلوی تکنولوژی را گرفت. پس ما
					هم باید روز به روز با دنیا تغییر کنیم تا عقب نمانیم. برای اینکار بهتر
					است که توانایی فنی خودمان را بالا ببریم.
				</p>
			</div>
		</div>
	);
};

export default Cards;
