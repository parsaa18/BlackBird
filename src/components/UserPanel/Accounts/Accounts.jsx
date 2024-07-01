import { Link, useNavigate } from "react-router-dom";
import AcProfile from "./AcProfile";
import { FaPlus } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Accounts = () => {
	const usersList = JSON.parse(localStorage.getItem("UsersList"));
	const nav = useNavigate();
	const addAccount = () => {
		usersList.length >= 3
			? toast.error(" جهت اضافه کردن بیشتر باید اشتراک پرمیوم بخرید ")
			: nav("/Login");
	};
	return (
		<>
			<Toaster />
			<div className="flex flex-col gap-10 ">
				<div className="text-metricBlack">بستن</div>
				<div className="flex flex-col gap-8 items-start w-full justify-start h-[80%] overflow-y-auto">
					{usersList.map((item) => {
						return (
							<>
								<AcProfile profile={item} />
							</>
						);
					})}
				</div>
				<div
					onClick={() => {
						addAccount();
					}}
					className="flex flex-col items-center gap-3 cursor-pointer text-sm group font-bold text-metricBlack"
				>
					<FaPlus className="group-hover:scale-125 transition-all duration-150 text-3xl p-1 border border-metricBlack rounded-full" />
					<p>اضافه کردن حساب</p>
				</div>
			</div>
		</>
	);
};

export default Accounts;
