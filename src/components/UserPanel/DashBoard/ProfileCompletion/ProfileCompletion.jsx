import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCheck } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { useSelector } from "react-redux";
import MagneticButton from "../../../common/magneticButton";
import { Link } from "react-router-dom";

const ProfileCompletion = () => {
	const { profile } = useSelector((s) => s.profile);

	return (
		<div className="w-full h-full flex flex-col items-start justify-between gap-1 p-4">
			<div className="flex items-center gap-1">
				<span className="font-medium text-3xl leading-none ">-</span>
				<h4 className="text-lg font-bold ">پروفایل شما</h4>
			</div>
			<div className="flex gap-1 flex-col items-center justify-center w-full sm:flex-row lg:flex-col">
				<div className="w-28 mx-auto">
					<CircularProgressbarWithChildren
						value={profile.profileCompletionPercentage}
						styles={{
							trail: {
								stroke: "white",
							},
							path: {
								stroke: `${
									profile.profileCompletionPercentage === 100
										? "rgb(76, 175, 80)"
										: profile.profileCompletionPercentage >= 60
										? "rgb(255,152,0)"
										: "rgb(244, 67, 54)"
								}`,
							},
						}}
					>
						{profile.profileCompletionPercentage === 100 ? (
							<FaCheck className="text-5xl text-green-500" />
						) : (
							<p
								className={`text-2xl font-semibold ${
									profile.profileCompletionPercentage >= 60
										? "text-orange-500"
										: "text-red-500"
								}`}
							>
								{profile.profileCompletionPercentage}%
							</p>
						)}
					</CircularProgressbarWithChildren>
				</div>
				<div className="w-full flex flex-col gap-2 items-center justify-center">
					{profile.profileCompletionPercentage === 100 ? (
						<p
							className={`font-bold text-green-500 xl:text-base md:text-[12px]`}
						>
							پروفایل شما تکمیل است
						</p>
					) : (
						<>
							<p
								className={`font-bold ${
									profile.profileCompletionPercentage >= 60
										? "text-orange-500"
										: "text-red-500"
								}`}
							>
								پروفایل شما تکمیل نیست
							</p>
							<Link to="/DashBoard/UserProfile/ProfileImage">
								<MagneticButton width="140px" height="35px">
									<div className="flex items-center gap-3 text-xs px-[10px] w-[140px] h-[35px] group">
										<div className=" w-5 h-5 flex items-center justify-center">
											<div className=" text text-[#1C1D20]  bg-white rounded-full w-1 h-1 flex items-center justify-center group-hover:w-5 group-hover:h-5 transition-all duration-300">
												<GoArrowUpRight className="opacity-0 group-hover:opacity-100" />
											</div>
										</div>
										تکمیل پروفایل
									</div>
								</MagneticButton>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileCompletion;
