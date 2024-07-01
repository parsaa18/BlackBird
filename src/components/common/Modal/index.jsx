import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({
	isOpen,
	onClose,
	children,
	width = "400px",
	height = "400px",
}) => {
	useEffect(() => {
		if (isOpen) {
			console.log("ok");
			document.body.style.overflow = "hidden";
		} else {
			console.log("no");
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: isOpen ? 1 : 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.35 }}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,

				backgroundColor: "rgba(0, 0, 0, 0.35)",
				backdropFilter: "blur(2px)",
				display: isOpen ? "flex" : "none",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 10000,
			}}
			onClick={onClose}
		>
			<motion.div
				initial={{ scale: 0.5 }}
				animate={{ scale: isOpen ? 1 : 0.5 }}
				exit={{ opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.35 }}
				style={{
					width: width,
					height: height,
					padding: "20px",
					borderRadius: "24px",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
				}}
				className="bg-metricWhite "
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default Modal;
