import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import ScrollToTop from "../../common/ScrollToTop";

const MainLayout = () => {
	return (
		<>
			<ScrollToTop />

			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
export default MainLayout;
