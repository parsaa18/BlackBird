import Form3 from "../../components/SignupAndLogin/SignUp/Form/Form3";

const Signup_Step3 = () => {
	return (
		<div className="flex flex-col gap-7 w-full">
			<div className="flex flex-col gap-3">
				<h2 className="text-xl sm:text-3xl font-bold">اطلاعات حساب کاربری</h2>
				<h4 className="text-metricGray3 text-xs sm:text-sm">
					لطفا اطلاعات خواسته شده را تکمیل کنید
				</h4>
			</div>
			<Form3 />
		</div>
	);
};

export default Signup_Step3;
