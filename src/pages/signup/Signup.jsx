import Form1 from "../../components/SignupAndLogin/SignUp/Form/Form1";

const Signup = () => {
	return (
		<div className="flex flex-col gap-7 w-full">
			<div className="flex flex-col gap-3">
				<h2 className="sm:text-3xl text-xl font-bold md:text-4xl">
					بریم شروع کنیم!
				</h2>
				<h4 className="text-metricGray3 sm:text-base text-sm">
					شماره همراه خود را وارد کنید
				</h4>
			</div>
			<Form1 />
		</div>
	);
};

export default Signup;
