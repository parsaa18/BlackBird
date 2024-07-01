import Form2 from "../../components/SignupAndLogin/Login/Form/Form2";

const Login_Step2 = () => {
	return (
		<div className="flex flex-col gap-7 w-full">
			<div className="flex flex-col gap-3">
				<h2 className="sm:text-4xl text-2xl font-bold">تایید شماره همراه</h2>
				<h4 className=" text-metricGray3 sm:text-base text-xs">
					ما برای شما کد تایید را ارسال کردیم
				</h4>
			</div>
			<Form2 />
		</div>
	);
};

export default Login_Step2;
