import { configureStore } from "@reduxjs/toolkit";
import profile from "./userProfile/profile";
import courseDetail from "../provider/CourseDetail/CourseDetail";
import loginInfo from "./Login/login";
import darkMode from "./darkMode";
const reduxStore = configureStore({
	reducer: {
		profile: profile,
		courseDetail: courseDetail,
		loginInfo: loginInfo,
		darkMode: darkMode,
	},
});

export default reduxStore;
