import { FaCamera, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { HiUser } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import editImg from "../../../assets/Icons/panel-icon/user-edit.svg";

const ProfileContainer = ({ dashboard = false }) => {
	const { profile, fName, lName, phoneNumber, email, nationalID } = useSelector(
		(s) => s.profile
	);
	function calculator(num) {
		let sum = 0;
		for (; num > 0; num = Math.floor(num / 10)) {
			sum += num % 10;
		}
		return sum + 1;
	}
	const colorNumber = Math.ceil(calculator(profile.nationalCode) / 20);
	return (
		<div className=" relative sm:min-h-[220px] min-h-[100px]  flex items-end">
			<div
				className={`profileWallpaper w-full ${
					colorNumber === 1
						? "bg-metricPink"
						: colorNumber === 2
						? "bg-metricYellow1"
						: colorNumber === 3
						? "bg-metricPurple"
						: colorNumber === 4
						? "bg-metricAqua"
						: colorNumber === 5
						? "bg-metricOrange"
						: "bg-metricGreen"
				}  rounded-[32px] h-[160px] absolute top-0 left-0`}
			></div>
			<div className="lg:px-20 sm:px-8 px-6 z-20 py-4 lg:py-0 flex pt-[104px] md:pt-0 md:flex-row flex-col justify-normal lg:gap-6 md:gap-4 gap-0">
				<div className="imgContainer relative group rounded-full lg:w-32 w-28 h-28 lg:h-32 flex items-center justify-center bg-metricPurple lg:outline-8 outline-8 outline outline-metricWhite overflow-hidden">
					{profile.currentPictureAddress !== "Not-set" ? (
						<img
							src={profile.currentPictureAddress}
							className="w-full h-full rounded-full"
						/>
					) : (
						<HiUser className="text-6xl text-metricWhite" />
					)}
					<Link
						to={"/DashBoard/UserProfile/ProfileImage"}
						className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 translate-y-10  rounded-full flex group-hover:translate-y-0 items-center justify-center w-full h-full bg-metricBlack/20 transition-all duration-200"
					>
						<FaCamera className="text-3xl text-metricWhite" />
					</Link>
				</div>
				<div className="flex flex-col md:gap-6 gap-3 md:pt-4 pt-1">
					<div className="flex  items-start lg:gap-10 sm:gap-5 md:flex-row flex-col md:items-end gap-2 lg:text-3xl xl:text-4xl sm:text-2xl text-xl font-bold min-h-[2.5rem] sm:pt-0 pt-2 text-metricBlack">
						<p className="truncate">
							{fName + lName ||
								(profile["fName"] + profile["lName"] &&
									profile["fName"] + " " + profile["lName"]) ||
								"بدون نام"}
						</p>
						{dashboard && (
							<div className="flex items-center justify-center gap-1 lg:gap-3">
								{profile.telegramLink && (
									<Link
										to={profile.telegramLink}
										target="_blank"
										className="text-metricGray3 text-lg  flex items-center justify-center bg-metricGray rounded-full p-2"
									>
										<FaTelegram />
									</Link>
								)}
								{profile.linkdinProfile && (
									<Link
										to={profile.linkdinProfile}
										target="_blank"
										className="text-metricGray3 text-lg  flex items-center justify-center bg-metricGray rounded-full p-2"
									>
										<FaLinkedin />
									</Link>
								)}
								<Link
									to={"/DashBoard/UserProfile/"}
									className=" flex items-center gap-1  text-sm font-semibold bg-metricGray px-3 py-2 rounded-full"
								>
									<img src={editImg} className="w-4" />
									ویرایش
								</Link>
							</div>
						)}
					</div>
					<div className="info flex md:items-center items-start md:flex-row flex-col lg:gap-3 md:gap-2 sm:gap-3 gap-0 text-metricGray3">
						<div className="phoneNumber lg:text-base  text-xs">
							{phoneNumber || profile["phoneNumber"]}
						</div>
						<span className="w-2 h-2 rounded-full bg-metricGray2 hidden md:inline "></span>

						<div className="email lg:text-base  text-xs">
							{" "}
							{email || profile["email"]}
						</div>
						<span className="w-2 h-2 rounded-full bg-metricGray2 hidden md:inline"></span>

						<div className="NationalID lg:text-base  text-xs">
							{nationalID || profile["nationalCode"]}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileContainer;
