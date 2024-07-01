import { useSelector } from "react-redux";
import DashBoard from "../../components/UserPanel/DashBoard/DashBoard";
import ProfileContainer from "../../components/UserPanel/ProfileContainer/profileContainer";
import { useEffect, useState } from "react";
import Joyride from "react-joyride";

const Profile = () => {
	const [run, setRun] = useState(false);
	const { profile } = useSelector((s) => {
		return s.profile;
	});
	const steps = [
		{
			target: "body",
			placement: "center",
			title: "خوش اومدی تازه وارد",
			locale: { next: "بریم که شروع کنیم" },
			content: (
				<>
					<h3>ممنون بابت انتخاب ما</h3>
					<br />
					<p>
						باهام همراه باش که یک سری اطلاعات کوچیک درمورد پنلت بگم,شاید به دردت
						بخوره:)
					</p>
				</>
			),
		},
		{
			target: "#panelMenuOpenBtn",
			title: "این دکمه برای باز کردن منوی پنله",
			content: "برای دسترسی به صفحات پنلت میتونی از این دکمه استفاده کنی",
		},
		{
			target: "#EditStep",
			title: "ویرایش حساب کاربری",
			content: (
				<>
					<h3>این صفحه برای ویرایش اطلاعات پروفایلته</h3>
					<br />
					<p>
						از اونجایی که تازه واردی بهتره بری و اطلاعات خودت رو وارد کنی تا
						بتونی به بعضی از قسمت های سایت دسترسی داشته باشی
					</p>
				</>
			),
		},
		{
			target: "#SecurityStep",
			title: "صفحه اطلاعات امنیتی",
			content: (
				<>
					<h3>این صفحه برای تغییر رمز عبور و اعمال احراز هویت دو مرحله ایه</h3>
					<br />
					<p>
						اگه خواستی رمز عبور خودتو عوض کنی میتونی از این صفحه این کارو بکنی
					</p>
					<br />
					<p>
						یا اگه میخوای امنیت حسابت بالا تر بره میتونی احراز هویت دو مرحله ای
						رو فعال کنی
					</p>
				</>
			),
		},
	];
	useEffect(() => {
		setRun(true);
	}, []);

	return (
		<>
			{profile.profileCompletionPercentage === 0 && (
				<Joyride
					steps={steps}
					run={run}
					hideCloseButton
					showSkipButton
					showProgress
					scrollToFirstStep
					continuous
					locale={{
						back: "قبلی",
						close: "بستن",
						last: "بدرود",
						next: "بعدی",
						skip: "خودم بلدم",
					}}
					styles={{
						options: {
							primaryColor: "rgb(217, 150, 102)",
						},
					}}
				/>
			)}
			<div className="flex flex-col  gap-7 relative  min-h-[525px] px-10">
				<ProfileContainer dashboard={true} />
				<DashBoard />
			</div>
		</>
	);
};

export { Profile };
