import * as yup from "yup";

const loginValidation = yup.object().shape({
	phoneOrGmail: yup.string().required("لطفا شماره یا ایمیل خود را وارد کنید"),
	password: yup.string().required("لطفا رمز عبور را وارد کنید"),
});

export default loginValidation;
