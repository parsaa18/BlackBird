import { useEffect, useRef } from "react";
import style from "./button.module.css";
import gsap from "gsap";
import Magnetic from "../magnetic";
import { delay } from "framer-motion";

const MagneticButton = ({
	children,
	width = "150px",
	height = "150px",
	bg = "#1C1D20EE",
	mag = true,
}) => {
	const circle = useRef(null);
	const timeline = useRef(null);
	let timeoutID = null;

	useEffect(() => {
		timeline.current = gsap.timeline({
			paused: true,
		});
		timeline.current
			.to(
				circle.current,
				{
					top: "-25%",
					width: "150%",
					duration: 0.4,
					ease: "power3.in",
				},
				"enter"
			)
			.to(
				circle.current,
				{ top: "-150%", width: "125%", duration: 0.25 },
				"exit"
			);
	}, []);

	const handleMouseEnter = (e) => {
		if (timeoutID) {
			clearTimeout(timeoutID);
			timeoutID = null;
		}
		timeline.current.tweenFromTo("enter", "exit");
	};

	const handleMouseLeave = (e) => {
		timeoutID = setTimeout(() => {
			timeline.current.play();
		}, 300);
	};

	return mag ? (
		<Magnetic>
			<div
				style={{ width: width, height: height, backgroundColor: bg }}
				className={style.button}
				onMouseEnter={(e) => {
					handleMouseEnter(e);
				}}
				onMouseLeave={(e) => {
					handleMouseLeave(e);
				}}
			>
				<div className="text-base font-medium z-10">{children}</div>
				<div ref={circle} className={style.circle}></div>
			</div>
		</Magnetic>
	) : (
		<div
			style={{ width: width, height: height, backgroundColor: bg }}
			className={style.button}
			onMouseEnter={(e) => {
				handleMouseEnter(e);
			}}
			onMouseLeave={(e) => {
				handleMouseLeave(e);
			}}
		>
			<div className="z-10 ">{children}</div>
			<div ref={circle} className={style.circle}></div>
		</div>
	);
};
export default MagneticButton;
