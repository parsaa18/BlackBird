import { createSlice } from "@reduxjs/toolkit";

const loginInfo = createSlice({
	name: "loginInfo",
	initialState: {
		loginInfo: { phoneOrGmail: "", password: "", rememberMe: false },
	},
	reducers: {
		setLoginInfo: (state, action) => {
			state.loginInfo = action.payload;
		},
	},
});

export const { setLoginInfo } = loginInfo.actions;
export default loginInfo.reducer;
