// import MagneticButton from "../common/magneticButton";
import { About } from "./About";
import Blogs from "./Blogs";
import { HeroSection } from "./HeroSection";
import LearnSection from "./LearnSect";
import { Marquee } from "./Marquee";
import Masters from "./Masters";
import TopCourse from "./PopCourses/TopCourse";
import {motion} from 'framer-motion'

const LandingPage = () => {
	return (
		<motion.div 
		// initial={{
		// 	y:100
		// }}
		// animate={{
		// 	y:0
		// }}
		// transition={{
		// 	ease: [0.22, 1, 0.36, 1],
		// 	duration: 0.7,
		// 	delay:3.2,
		// }}
		>
			<HeroSection />
			<Marquee />
			<About />
			<TopCourse />
			<Masters />
			<Blogs />
			<LearnSection />
		</motion.div>
	);
};

export { LandingPage };
