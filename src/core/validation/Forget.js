import * as yup from "yup";

export const forget1Validation = yup.object().shape({
	email: yup
		.string()
		.required("لطفا ایمیل خود را وارد کنید")
		.matches(
			/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			"ایمیل خود را درست وارد کنید"
		),
});
export const forget2Validation = yup.object().shape({
	password: yup
		.string()
		.required("لطفا رمز خود را وارد کنید")
		.min(6, "بیشتر از 6 کارکتر وارد کنید"),

	password2: yup
		.string()
		.required("لطفا رمز خود را وارد کنید")
		.min(6, "بیشتر از 6 کارکتر وارد کنید"),
});
