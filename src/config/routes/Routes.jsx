// Import Router
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
// Main layout
import MainLayout from "../../components/layout/mainLayout";

// User Pages
import CoursesList from "../../pages/CoursesList";
import ArticlesList from "../../pages/ArticlesList";
import ArticleDetails from "../../pages/ArticleDetails";
import Landing from "../../pages/Landing/Landing";
import CourseDetailsPage from "../../pages/coursedetail/CourseDetails";

// User Login And Signup And Forgot Password
import Signup from "../../pages/signup/Signup";
import Signup_Step2 from "../../pages/signup/Signup_Step2";
import SignupLayout from "../../components/layout/Signup/SignupLayout";
import Signup_Step3 from "../../pages/signup/Signup_Step3";
import LoginLayout from "../../components/layout/Login/LoginLayout";
import Login from "../../pages/Login/Login";
import ForgetPasswordLayout from "../../components/layout/Login/ForgetPasswordLayout";
import Login_Step2 from "../../pages/Login/Login_Step2";
import ForgetPassword from "../../pages/Forget/ForgetPassword";
import ForgetPassword_Step2 from "../../pages/Forget/ForgetPassword_Step2";

// User Panel
import PanelLayOut from "../../pages/PanelLayOut";
import MyCourses from "../../components/MyCourses";
import ReservedCourses from "../../components/ReservedCourses";
import MyFavCourses from "../../components/MyFavCourses";
import MyFavArticles from "../../components/MyFavArticles";
import { Profile } from "../../pages/DashBoard";
import UserProfile from "../../pages/UserProfile";
import EditProfileForm from "../../components/UserProfile";
import ProfileImage from "../../components/UserProfile/ProfileImage";
import Security from "../../pages/PanelSecurity";
import ChangePassword from "../../components/PanelSecurity/ChangePassword/ChangePassword";
import TwoStepVerification from "../../components/PanelSecurity/TwoStepVerification/TwoStepVerification";
import MediaLinks from "../../components/UserProfile/MediaLinks";
import Address from "../../components/UserProfile/Address";
import PageTransition from "../../components/common/PageTransition/PageTransition";
import { AnimatePresence } from "framer-motion";
import ChangePassWordStep2 from "../../components/PanelSecurity/ChangePassword/Step2";
import Report from "../../components/UserPanel/Report";

const RoutesComponent = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				{/* User Pages */}
				<Route path="/" element={<MainLayout />}>
					<Route
						index
						element={
							<PageTransition name={"خانه"}>
								<Landing />
							</PageTransition>
						}
					/>
					<Route
						path="/CoursesList"
						element={
							<PageTransition name={"دوره ها"}>
								<CoursesList />
							</PageTransition>
						}
					/>
					<Route
						path="/CoursesList?Query="
						element={
							<PageTransition name={"دوره ها"}>
								<CoursesList />
							</PageTransition>
						}
					/>
					<Route
						path="/CourseDetails/:name/:id"
						element={
							<PageTransition>
								<CourseDetailsPage />
							</PageTransition>
						}
					/>
					<Route
						path="/ArticlesList"
						element={
							<PageTransition name={"اخبار و مقالات"}>
								<ArticlesList />
							</PageTransition>
						}
					/>
					<Route
						path="/ArticlesList?Query="
						element={
							<PageTransition name={"اخبار و مقالات"}>
								<ArticlesList />
							</PageTransition>
						}
					/>
					<Route
						path="/ArticleDetails/:name/:id"
						element={
							<PageTransition>
								<ArticleDetails />
							</PageTransition>
						}
					/>
				</Route>
				<Route
					path="/DashBoard/:userId?"
					element={
						// <PageTransition name={"پنل کاربری"}>
						<PanelLayOut />
						// {/* </PageTransition> */}
					}
				>
					<Route index element={<Profile />} />
					<Route path="Reports" element={<Report />} />
					<Route path="MyReservedCourses" element={<ReservedCourses />} />
					<Route path="FavouriteCourses" element={<MyFavCourses />} />
					<Route path="FavouriteArticles" element={<MyFavArticles />} />
					<Route path="UserProfile" element={<UserProfile />}>
						<Route index element={<EditProfileForm />} />
						<Route path="ProfileImage" element={<ProfileImage />} />
						<Route path="Address" element={<Address />} />
						<Route path="MediaLinks" element={<MediaLinks />} />
					</Route>
					<Route path="Security" element={<Security />}>
						<Route
							path="ChangePassword"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route index element={<ChangePassword />} />
							<Route path="Step2" element={<ChangePassWordStep2 />} />
						</Route>
						,
						<Route
							path="TwoStepVerification/:configValue?"
							element={<TwoStepVerification />}
						/>
						,
					</Route>
					<Route path="MyCourses" element={<MyCourses />} />
				</Route>
				<Route path="/SignUp" element={<SignupLayout />}>
					<Route
						index
						element={
							<PageTransition name={"ثبت نام حساب کاربری"}>
								<Signup />
							</PageTransition>
						}
					/>
					,
					<Route path="Step2/:phoneNumber" element={<Signup_Step2 />} />,
					<Route path="Step3/:phoneNumber" element={<Signup_Step3 />} />
				</Route>
				<Route path="/Login" element={<LoginLayout />}>
					<Route
						index
						element={
							<PageTransition name={"ورود به حساب کاربری"}>
								<Login />
							</PageTransition>
						}
					/>
					,
					<Route path="Step2" element={<Login_Step2 />} />,
				</Route>
				<Route path="/ForgetPassword" element={<ForgetPasswordLayout />}>
					<Route index element={<ForgetPassword />} />,
					<Route
						path="Step2/:configValue?"
						element={<ForgetPassword_Step2 />}
					/>
					,
				</Route>
			</Routes>
		</AnimatePresence>
	);
};
export default RoutesComponent;
