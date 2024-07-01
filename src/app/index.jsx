import "./App.css";
import RoutesComponent from "../config/routes/Routes";

import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../core/provider/darkMode";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PreLoader } from "../components/Landing/PreLoader";
import LocomotiveScroll from "locomotive-scroll";
import { checkExpired } from "../core/services/MultiAccount/checkExpired";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	const dispatch = useDispatch();
	const { darkMode } = useSelector((state) => {
		return state.darkMode;
	});

	useEffect(() => {
		localStorage.getItem("darkMode") === null
			? localStorage.setItem("darkMode", darkMode)
			: dispatch(setDarkMode(JSON.parse(localStorage.getItem("darkMode"))));

		checkExpired();
	}, []);

	useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll();
		setTimeout(() => {
			setIsLoading(false);
			document.body.style.cursor = "default";
			window.scrollTo(0, 0);
		}, 2600);
	}, []);
	return (
		<>
			<AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
			<div
				className={`${
					darkMode ? "dark" : "light"
				} w-full max-w-[1400px] mx-auto`}
			>
				{/* <RouterProvider router={Routes}  /> */}
				<AnimatePresence mode="wait">
					<RoutesComponent />
				</AnimatePresence>
			</div>
		</>
	);
};

export default App;
