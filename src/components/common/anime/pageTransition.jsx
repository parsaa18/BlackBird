import { motion } from "framer-motion";

const PageTransition = () => {
	return (
		<>
			<motion.div
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{
					duration: 0.7,
					ease: [0.76, 0, 0.24, 1],
					delay: [0.2],
				}}
				className="fixed top-0 left-0 flex items-center justify-center bg-[#141516] z-10 w-screen h-screen origin-top"
			></motion.div>
		</>
	);
};

export default PageTransition;
