import { cubicBezier, motion, useAnimationControls } from "framer-motion";
import LogoIcon from "../../../assets/Icons/panel-icon/LogoIcon";
import Metric from "../../../assets/Icons/panel-icon/Metric";
import { useEffect, useState } from "react";
import ExpandIcon from "../../../assets/Icons/panel-icon/SidaBarExpandIcon";
import { HiOutlineLogout, HiUser } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashBoardIcon from "../../../assets/Icons/panel-icon/DashBoardIcon";
import NavigationLink from "./NavLink";
import MyCourseIcon from "../../../assets/Icons/panel-icon/MyCourseIcon";
import ReservedIcon from "../../../assets/Icons/panel-icon/ReservedIcon";
import FavCourseIcon from "../../../assets/Icons/panel-icon/FavCourseIcon";
import FavArticleIcon from "../../../assets/Icons/panel-icon/FavArticleIcon";
import EditProfIcon from "../../../assets/Icons/panel-icon/EditProfIcon";
import ChangePassIcon from "../../../assets/Icons/panel-icon/ChangePassIcon";
import { IoSettingsSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import metric from "../../../assets/Icons/panel-icon/Metric.svg";
import { logout } from "../../../core/services/MultiAccount/logout";

const PanelSideBar = ({ setAccountModal }) => {
	const animationVariants = {
		close: {
			width: "6rem",
			transition: {
				type: "tween",
				duration: 0.4,
				ease: [0.7, 0, 0.4, 1],
			},
		},
		open: {
			width: window.innerWidth >= 540 ? "16rem" : "100%",
			transition: {
				type: "tween",
				duration: 0.4,
				ease: [0.7, 0, 0.4, 1],
			},
		},
	};

	const animationBtnVariants = {
		close: {
			right: "5rem",
			rotate: "180deg",
			transition: {
				type: "tween",
				duration: 0.4,
				ease: [0.7, 0, 0.4, 1],
			},
		},
		open: {
			right: window.innerWidth >= 540 ? "15rem" : "0rem",
			rotate: "360deg",
			transition: {
				type: "tween",
				duration: 0.4,
				ease: [0.7, 0, 0.4, 1],
			},
		},
	};

	const animationControl = useAnimationControls();
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const { profile } = useSelector((s) => s.profile);
	const navigate = useNavigate();

	const handleLogout = () => {
		console.log(profile);
		const result = logout();
		result === "EMPTY" ? navigate("/") : navigate("/DashBoard/" + result);
	};

	useEffect(() => {
		open ? animationControl.start("open") : animationControl.start("close");
	}, [open]);
	const { darkMode } = useSelector((s) => {
		return s.darkMode;
	});
	return (
		<motion.nav
			variants={animationVariants}
			initial="close"
			animate={animationControl}
			exit={"close"}
			className={`bg-metricWhite flex flex-col items-center justify-between z-40 shadow shadow-gray-500/30 border-l rounded-l-3xl border-gray-500/10  gap-10 p-5 fixed top-0  ${
				open ? "right-0  " : "-right-20 "
			} h-full sm:right-0  transition-position duration-500 `}
		>
			<div className="flex items-center justify-evenly p-3 w-full ">
				<div className="p-1">
					<LogoIcon w="30" h="30" color={darkMode ? "#cacaca" : "#313131"} />
				</div>
				<div className="flex overflow-hidden">
					<Metric w="60" h="20" color={darkMode ? "#cacaca" : "#313131"} />
				</div>
			</div>
			<div className="flex flex-col items-center w-full flex-1 px-2 gap-1">
				<NavigationLink
					to="./"
					name={"داشبورد"}
					active={
						location.pathname.toLowerCase().includes("dashboard") &&
						!location.pathname.toLowerCase().includes("mycourses") &&
						!location.pathname.toLowerCase().includes("myreservedcourses") &&
						!location.pathname.toLowerCase().includes("favouritecourses") &&
						!location.pathname.toLowerCase().includes("favouritearticles") &&
						!location.pathname.toLowerCase().includes("userprofile") &&
						!location.pathname.toLowerCase().includes("security")
					}
				>
					<div className="w-10 min-w-10 h-10 min-h-10 flex items-center justify-center">
						<DashBoardIcon
							w="23"
							h="23"
							color={
								location.pathname.toLowerCase().includes("dashboard") &&
								!location.pathname.toLowerCase().includes("mycourses") &&
								!location.pathname
									.toLowerCase()
									.includes("myreservedcourses") &&
								!location.pathname.toLowerCase().includes("favouritecourses") &&
								!location.pathname
									.toLowerCase()
									.includes("favouritearticles") &&
								!location.pathname.toLowerCase().includes("userprofile") &&
								!location.pathname.toLowerCase().includes("security")
									? "#171717"
									: darkMode
									? "#cacaca"
									: "#292D32"
							}
						/>
					</div>
				</NavigationLink>
				<NavigationLink
					to="./MyCourses"
					name={"دوره های من"}
					active={location.pathname.toLowerCase().includes("mycourses")}
				>
					<div className="w-10 min-w-10 h-10 min-h-10 flex items-center justify-center">
						<MyCourseIcon
							w="23"
							h="23"
							color={
								location.pathname.toLowerCase().includes("mycourses")
									? "#171717"
									: darkMode
									? "#cacaca"
									: "#292D32"
							}
						/>
					</div>
				</NavigationLink>
				<NavigationLink
					to="./MyReservedCourses"
					name={"رزرو های من"}
					active={location.pathname.toLowerCase().includes("reservedcourses")}
				>
					<div className="w-10 min-w-10 h-10 min-h-10 flex items-center justify-center">
						<ReservedIcon
							w="23"
							h="23"
							color={
								location.pathname.toLowerCase().includes("reservedcourses")
									? "#171717"
									: darkMode
									? "#cacaca"
									: "#292D32"
							}
						/>
					</div>
				</NavigationLink>
				<NavigationLink
					to="./FavouriteCourses"
					name={"علاقه مندی دوره"}
					active={location.pathname.toLowerCase().includes("favouritecourses")}
				>
					<div className="w-10 min-w-10 h-10 min-h-10 flex items-center justify-center">
						<FavCourseIcon
							w="23"
							h="23"
							color={
								location.pathname.toLowerCase().includes("favouritecourses")
									? "#171717"
									: darkMode
									? "#cacaca"
									: "#292D32"
							}
						/>
					</div>
				</NavigationLink>
				<NavigationLink
					to="./FavouriteArticles"
					name={"علاقه مندی بلاگ"}
					active={location.pathname.toLowerCase().includes("favouritearticles")}
				>
					<div className="w-10 min-w-10 h-10 min-h-10 flex items-center justify-center">
						<FavArticleIcon
							w="23"
							h="23"
							color={
								location.pathname.toLowerCase().includes("favouritearticles")
									? "#171717"
									: darkMode
									? "#cacaca"
									: "#292D32"
							}
						/>
					</div>
				</NavigationLink>
				<NavigationLink
					to="./UserProfile"
					name={"اطلاعات حساب کاربری"}
					active={location.pathname.toLowerCase().includes("userprofile")}
				>
					<div
						id="EditStep"
						className="w-10 min-w-10 h-10 min-h-10 flex items-center justify-center"
					>
						<EditProfIcon
							w="23"
							h="23"
							color={
								location.pathname.toLowerCase().includes("userprofile")
									? "#171717"
									: darkMode
									? "#cacaca"
									: "#292D32"
							}
						/>
					</div>
				</NavigationLink>
				<NavigationLink
					to="./Security/ChangePassword"
					name={"امنیت"}
					active={location.pathname.toLowerCase().includes("security")}
				>
					<div
						id="SecurityStep"
						className="w-10 min-w-10 h-10 min-h-10 flex items-center justify-center"
					>
						<ChangePassIcon
							w="23"
							h="23"
							color={
								location.pathname.toLowerCase().includes("security")
									? "#171717"
									: darkMode
									? "#cacaca"
									: "#292D32"
							}
						/>
					</div>
				</NavigationLink>
			</div>

			<div className="flex flex-col  justify-start gap-4 w-full">
				<div className="flex items-center gap-3 w-full">
					<div>
						{profile.currentPictureAddress !== "Not-set" ? (
							<img
								src={profile.currentPictureAddress}
								className="min-w-14 w-14 rounded-full cursor-pointer"
							/>
						) : (
							<div className="p-4 rounded-full border-2 border-metricGray3 ">
								<HiUser className="text-2xl text-metricGray3" />
							</div>
						)}
					</div>
					<div className="flex flex-col overflow-hidden gap-1 whitespace-nowrap">
						<h4 className="text-metricBlack font-extrabold">
							{(profile["fName"] + profile["lName"] &&
								profile["fName"] + " " + profile["lName"]) || (
								<p className="text-xs"> اطلاعات خود را تکمیل کنید </p>
							)}
						</h4>
						<div
							onClick={handleLogout}
							className="text-red-500 text-xs flex items-center gap-1 cursor-pointer"
						>
							<HiOutlineLogout className="text-lg" />
							خروج از حساب
						</div>
					</div>
				</div>
			</div>
			<motion.button
				variants={animationBtnVariants}
				initial="close"
				animate={animationControl}
				className={`absolute outline-none p-1 bg-metricWhite z-50 hover:bg-metricGray top-20  rounded-xl `}
				onClick={() => {
					setOpen(!open);
				}}
				id="panelMenuOpenBtn"
			>
				<ExpandIcon w="23" h="23" />
			</motion.button>
		</motion.nav>
	);
};
export default PanelSideBar;
