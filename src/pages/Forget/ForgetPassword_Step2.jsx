import Form2 from "../../components/SignupAndLogin/ForgetPassword/Form2";

const ForgetPassword_Step2 = () => {
	return (
		<div className="flex flex-col gap-7 w-full">
			<div className="flex flex-col gap-3">
				<h2 className="text-2xl sm:text-4xl font-bold">فراموشی رمز عبور</h2>
				<h4 className="text-metricGray3 text-xs sm:text-base">
					ایمیل خود را وارد کنید تا لینک تغییر رمز عبور برای شما ارسال شود
				</h4>
			</div>
			<Form2 />
		</div>
	);
};

export default ForgetPassword_Step2;
