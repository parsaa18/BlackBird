import * as yup from "yup";

export const signupValidation = yup.object().shape({
	phoneNumber: yup
		.string()
		.required("لطفا شماره خود را وارد کنید")
		.matches(/^(?:(?:\+|00)98|0)?9\d{9}$/, "شماره خود را درست وارد کنید"),
});

export const VerifyMessageValid = yup.object().shape({
	verifyCode: yup.string().required("لطفا کد ارسال شده را وارد کنید"),
});

export const FinalRegister = yup.object().shape({
	gmail: yup
		.string()
		.required("لطفا ایمیل خود را وارد کنید")
		.matches(
			/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			"ایمیل خود را درست وارد کنید"
		),
	password: yup
		.string()
		.required("لطفا رمز عبور را وارد کنید")
		.min(6, "رمز عبور باید حداقل 6 کارکتر باشد"),

	phoneNumber: yup
		.string()
		.required("لطفا شماره خود را وارد کنید")
		.matches(/^(?:(?:\+|00)98|0)?9\d{9}$/, "شماره خود را درست وارد کنید"),
});
