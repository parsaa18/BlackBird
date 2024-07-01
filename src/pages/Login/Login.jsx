import Form1 from "../../components/SignupAndLogin/Login/Form/Form1";

const Login = () => {
	return (
		<div className="flex flex-col gap-7 w-full">
			<div className="flex flex-col gap-3">
				<h2 className="sm:text-4xl text-2xl font-bold">خوش اومدید!</h2>
				<h4 className=" text-metricGray3 sm:text-base text-xs">
					برای ورود به حساب خود ایمیل یا شماره موبایل و رمزعبور خود را وارد کنید
				</h4>
			</div>
			<Form1 />
		</div>
	);
};

export default Login;
