import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../../app/MainLayout";
import MainLayout from "../../components/layout/mainLayout";

import { Login } from "../../pages/Login/Login(p1)";
import { CourseDetail } from "../../pages/coursedetail/CourseDetail";
import CoursesList from "../../pages/CoursesList";
import ArticlesList from "../../pages/ArticlesList";
import ArticleDetails from "../../pages/ArticleDetails";
import { Landing } from "../../pages/Landing/Landing";
import { SignUp2 } from "../../pages/signup/Signup(p2)";
import { Login2 } from "../../pages/Login/Login(p2)";
import { SignUp3 } from "../../pages/signup/Signup(p3)";
import { Forget } from "../../pages/Forget/Forget(p1)";
import { Forget2 } from "../../pages/Forget/Forget(p2)";
import PanelLayOut from "../../pages/PanelLayOut";
import MyCourses from "../../components/MyCourses";
import ReservedCourses from "../../components/ReservedCourses";
import MyFavCourses from "../../components/MyFavCourses";
import MyFavArticles from "../../components/MyFavArticles";
import { Profile } from "../../pages/DashBoard";
import { UserProfile } from "../../pages/UserProfile";
import { ImageProfile } from "../../pages/ImageProfile";
import Signup from "../../pages/signup/Signup";

const Routes = createBrowserRouter([
	{
		path: "/DashBoard/:id?",
		element: <PanelLayOut />,

		children: [
			{
				index: true,
				element: (
					<div className="flex items-center justify-center h-[500px] text-2xl w-full">
						<Profile />
					</div>
				),
			},
			{
				path: "MyReservedCourses",
				element: <ReservedCourses />,
			},
			{
				path: "FavouriteCourses",
				element: <MyFavCourses />,
			},
			{
				path: "FavouriteArticles",
				element: <MyFavArticles />,
			},
			{
				path: "UserProfile",
				element: (
					<div className="flex items-center justify-center h-[500px] text-2xl w-full">
						<UserProfile />
					</div>
				),
			},
			{
				path: "ChangePassWord",
				element: (
					<div className="flex items-center justify-center h-[500px] text-2xl w-full">
						ChangePassWord
					</div>
				),
			},
			{
				path: "MyCourses",
				element: <MyCourses />,
			},
		],
	},
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Landing /> },
			{
				path: "/CoursesList",

				element: <CoursesList />,
			},
			{
				path: "/CourseDetails/:id",

				element: <CourseDetail />,
			},
			{
				path: "/ArticlesList",
				element: <ArticlesList />,
			},
			{
				path: "/ArticleDetails/:id",
				element: <ArticleDetails />,
			},
		],
	},
	{
		path: "/SignUp",
		element: <Signup />,
	},

	{ path: "/SignUp2", element: <SignUp2 /> },
	{ path: "/SignUp3", element: <SignUp3 /> },
	{ path: "/LogIn", element: <Login /> },
	{ path: "/LogIn2", element: <Login2 /> },
	{ path: "/Forget", element: <Forget /> },
	{ path: "/Forget2", element: <Forget2 /> },
]);
export default Routes;
