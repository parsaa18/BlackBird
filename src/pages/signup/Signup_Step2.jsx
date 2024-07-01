import Form2 from "../../components/SignupAndLogin/SignUp/Form/Form2";

const Signup_Step2 = () => {
	return (
		<div className="flex flex-col gap-7 w-full">
			<div className="flex flex-col gap-3">
				<h2 className="text-2xl sm:text-4xl font-bold ">تایید شماره همراه</h2>
				<h4 className="text-metricGray3 text-xs sm:text-base">
					ما کد همراه را به شماره شما ارسال کردیم
				</h4>
			</div>
			<Form2 />
		</div>
	);
};

export default Signup_Step2;
