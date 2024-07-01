import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({
	children,
	del = 0.25,
	dur = 0.5,
	dirX = false,
	dir = 100,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const revealAnimation = useAnimation();
	useEffect(() => {
		if (isInView) {
			revealAnimation.start("visible");
		}
	}, [isInView]);

	return (
		<div ref={ref} className="relative overflow-hidden ">
			{dirX ? (
				<motion.div
					variants={{
						hidden: { opacity: 0, x: dir },
						visible: { opacity: 1, x: 0 },
					}}
					initial="hidden"
					animate={revealAnimation}
					transition={{ duration: dur, delay: del }}
				>
					{children}
				</motion.div>
			) : (
				<motion.div
					variants={{
						hidden: { opacity: 0, y: dir },
						visible: { opacity: 1, y: 0 },
					}}
					initial="hidden"
					animate={revealAnimation}
					transition={{ duration: dur, delay: del }}
				>
					{children}
				</motion.div>
			)}
		</div>
	);
};

export default Reveal;
