import { motion } from "framer-motion";
import { menuSlideAnimation } from "./animation";
import styles from "./Navbar.module.css";
import Magnetic from "../../../common/magnetic";
import { Link } from "react-router-dom";
import UserNav from "../UserNav/UserNav";
import sun from "../../../../assets/Icons/darkNLight/sun.svg";
import moon from "../../../../assets/Icons/darkNLight/moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../../../core/provider/darkMode";
import {
	PiFacebookLogo,
	PiWhatsappLogoLight,
	PiYoutubeLogoLight,
} from "react-icons/pi";

const Nav = ({ setActive, active }) => {
	const initialPath = `M100 0 L100 ${window.innerHeight} Q-250 ${
		window.innerHeight / 2
	} 100 0`;

	const targetPath = `M100 0 L100 ${window.innerHeight} Q250 ${
		window.innerHeight / 2
	} 100 0`;

	const curve = {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: { ease: [0.76, 0, 0.24, 1], duration: 1.2 },
		},
		exit: {
			d: initialPath,
			transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8 },
		},
	};

	const dispatch = useDispatch();
	const { darkMode } = useSelector((state) => {
		return state.darkMode;
	});
	const handleDarkMode = () => {
		localStorage.setItem("darkMode", !darkMode);
		dispatch(setDarkMode(!darkMode));
	};

	return (
		<>
			<motion.div
				animate="enter"
				initial="initial"
				exit="exit"
				variants={menuSlideAnimation}
				className="fixed right-0 top-0 h-lvh w-full sm:w-[380px] flex justify-center items-center bg-[rgb(41,41,41)] text-white z-[9000]"
			>
				<div className="flex gap-16 flex-col w-2/3 h-5/6 mr-6 mb-8 items-end">
					<div className="flex w-5/6 items-center justify-between">
						<UserNav navbar={true} />
						<Magnetic>
							<div
								className="text-xl p-3 rounded-full bg-metricGray z-10 cursor-pointer text-white"
								onClick={() => {
									handleDarkMode();
								}}
							>
								{darkMode ? (
									<img src={sun} className="w-5" />
								) : (
									<img src={moon} className="w-5" />
								)}
							</div>
						</Magnetic>
					</div>
					<ul className="list-none flex flex-col items-start w-full gap-6 leading-none font-Iransans text-[16px] sm:text-[28px] text-white font-medium">
						<Magnetic>
							<li
								onClick={() => {
									setActive(!active);
								}}
								className="cursor-pointer  text-white"
							>
								<Link to="/"> خانه</Link>
							</li>
						</Magnetic>
						<Magnetic>
							<li
								onClick={() => {
									setActive(!active);
								}}
								className="cursor-pointer text-white"
							>
								<Link to="/CoursesList?PageNumber=1"> دوره ها</Link>
							</li>
						</Magnetic>
						<Magnetic>
							<li
								onClick={() => {
									setActive(!active);
								}}
								className="cursor-pointer text-white mt-2"
							>
								<Link to={"./ArticlesList"}>بلاگ ها</Link>
							</li>
						</Magnetic>
						<Magnetic>
							<li
								onClick={() => {
									setActive(!active);
								}}
								className="cursor-pointer text-white"
							>
								<Link to={"./ArticlesList"}>اساتید</Link>
							</li>
						</Magnetic>
						<Magnetic>
							<li
								onClick={() => {
									setActive(!active);
								}}
								className="cursor-pointer text-white"
							>
								<Link to={"./ArticlesList"}>درباره ما</Link>
							</li>
						</Magnetic>
						<Magnetic>
							<li
								onClick={() => {
									setActive(!active);
								}}
								className="cursor-pointer text-white"
							>
								<Link to={"./ArticlesList"}>ارتباط با ما</Link>
							</li>
						</Magnetic>
					</ul>
					<div className="flex justify-center w-full">
						<div className="flex w-4/5 justify-between text-white ">
							<PiFacebookLogo className="cursor-pointer  text-white text-2xl" />
							<PiWhatsappLogoLight className="cursor-pointer text-white text-2xl" />
							<PiYoutubeLogoLight className="cursor-pointer  text-white text-2xl" />
						</div>
					</div>
				</div>

				<svg className={styles.svgCurve}>
					<motion.path
						variants={curve}
						initial="initial"
						animate="enter"
						exit="exit"
					></motion.path>
				</svg>
			</motion.div>
		</>
	);
};

export default Nav;
