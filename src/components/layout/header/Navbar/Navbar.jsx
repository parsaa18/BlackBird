import { useState } from "react";
import style from "./Navbar.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import Magnetic from "../../../common/magnetic";
const NavbarComponent = ({ header }) => {
	const [active, setActive] = useState(false);
	return (
		<>
			<Magnetic>
				{header ? (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						className={`w-11 h-11 cursor-pointer flex items-center justify-center  z-[10000] bg-metricPurple rounded-full`}
						onClick={() => {
							setActive(!active);
						}}
					>
						<div
							className={`${active ? style.burgerActive : style.burger}  `}
						></div>
					</motion.div>
				) : (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						className={`w-[80px] h-[80px] cursor-pointer flex items-center justify-center fixed top-5 right-5 z-[10000] bg-metricPurple rounded-full`}
						onClick={() => {
							setActive(!active);
						}}
					>
						<div
							className={`${active ? style.burgerActive : style.burger}  `}
						></div>
					</motion.div>
				)}
			</Magnetic>

			<AnimatePresence mode="wait">
				{active && <Nav active={active} setActive={setActive} />}
			</AnimatePresence>
		</>
	);
};

export default NavbarComponent;
