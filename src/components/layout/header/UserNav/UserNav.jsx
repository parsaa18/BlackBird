import { Link } from "react-router-dom";
import Magnetic from "../../../common/magnetic";
import { useEffect, useState } from "react";
import { getProfileInfoApi } from "../../../../core/services/api/panel/getProfileInfo";
import { HiUser } from "react-icons/hi";
import { ClipLoader } from "react-spinners";

const UserNav = ({ navbar = false }) => {
	const [profileInfo, setProfileInfo] = useState();
	const [loading, setLoading] = useState(false);

	const getProfile = async () => {
		setLoading(true);
		const result = await getProfileInfoApi();
		console.log(result);
		result.phoneNumber && setProfileInfo(result);
		setLoading(false);
	};
	useEffect(() => {
		localStorage.getItem("UsersList") && getProfile();
	}, []);
	console.log(profileInfo);
	return (
		<>
			{loading ? (
				<ClipLoader size={20} />
			) : profileInfo ? (
				<Link to="./DashBoard" className="flex items-center gap-2">
					<Magnetic>
						{profileInfo.currentPictureAddress !== "Not-set" ? (
							<img
								src={profileInfo.currentPictureAddress}
								className="min-w-11 w-11 rounded-full cursor-pointer"
							/>
						) : (
							<div className="p-2 rounded-full border-2 border-metricGray3 ">
								<HiUser className="text-2xl text-metricGray3" />
							</div>
						)}
					</Magnetic>
					<h2 className=" text-white">
						{navbar && profileInfo["fName"] + profileInfo["lName"]
							? profileInfo["fName"] + " " + profileInfo["lName"]
							: navbar && <p className="text-xs text-white">بدون اسم</p>}
					</h2>
				</Link>
			) : (
				<Link to="./LogIn">
					<Magnetic>
						<div className="text-base  font-Iransans bg-metricPurple px-10 py-3 leading-none rounded-3xl cursor-pointer font-semibold shadow-sm text-metricBlack">
							ورود
						</div>
					</Magnetic>
				</Link>
			)}
		</>
	);
};

export default UserNav;
