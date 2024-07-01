import { createSlice } from "@reduxjs/toolkit";

const profile = createSlice({
	name: "profile",
	initialState: {
		profile: {},
		fName: "",
		lName: "",
		phoneNumber: "",
		email: "",
		nationalID: "",
		userImage: [],
	},
	reducers: {
		setState: (state, action) => {
			state.profile = action.payload;
		},
		setFName: (state, action) => {
			state.fNameame = action.payload;
		},
		setLName: (state, action) => {
			state.lNameame = action.payload;
		},
		setPhone: (state, action) => {
			state.phoneNumber = action.payload;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setID: (state, action) => {
			state.nationalID = action.payload;
		},
	},
});

export const {
	setState,
	setFName,
	setLName,
	setPhone,
	setID,
	setEmail,
	setUserImage,
} = profile.actions;
export default profile.reducer;
