import { useEffect, useState } from "react";
import { getAccountInfo } from "../../../core/services/MultiAccount/getAccountInfo";
import { HiLogin, HiOutlineLogout } from "react-icons/hi";
import { IoLogIn, IoLogInOutline } from "react-icons/io5";
import { deactivateOtherUsers } from "../../../core/services/MultiAccount/deactivate";
import { useNavigate } from "react-router-dom";
import { logoutById } from "../../../core/services/MultiAccount/logout";

const AcProfile = ({ profile }) => {
	const [info, setInfo] = useState();
	const nav = useNavigate();
	const getProfile = async () => {
		console.log("yo");
		const result = await getAccountInfo(profile.token);
		result.phoneNumber && setInfo(result);
	};

	const switchAccount = () => {
		deactivateOtherUsers(profile.id);
		nav("/Dashboard/" + profile.id);
	};

	const logout = () => {
		const result = logoutById(profile.id);

		console.log(result);
		result === "EMPTY" ? nav("/") : nav("/DashBoard/" + result);
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<>
			{info && (
				<div className="flex items-center justify-between w-full gap-4 cursor-pointer">
					<div
						onClick={() => {
							switchAccount();
						}}
						className="flex items-center justify-between w-full gap-4"
					>
						<div className="min-w-16 min-h-16 w-16 h-16 rounded-full overflow-y-hidden flex justify-center items-center">
							<img src={info.currentPictureAddress} alt="" />
						</div>

						<div className="flex flex-col justify-start items-start w-full gap-3 text-metricBlack">
							<h4 className="text-metricBlack font-extrabold">
								{(info["fName"] + info["lName"] &&
									info["fName"] + " " + info["lName"]) || (
									<p className="text-xs"> اسم ندارد </p>
								)}
							</h4>
							<p className="text-sm truncate">{info.phoneNumber}</p>
							<p className="text-sm truncate">{info.email}</p>
						</div>
					</div>

					<div
						onClick={() => {
							logout();
						}}
						className="text-red-500 flex flex-col text-xs items-center cursor-pointer"
					>
						<HiOutlineLogout className="text-3xl" />
						خروج
					</div>
				</div>
			)}
		</>
	);
};

export default AcProfile;
