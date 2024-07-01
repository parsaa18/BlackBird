import { useState } from "react";
import PFPFull from "../ProfileImageFullScreen/PFPFull";
import { MdCheck, MdDelete } from "react-icons/md";
import {
	DeleteProfileImage,
	SelectProfileImage,
} from "../../../core/services/api/panel/ProfileImage";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../../core/provider/userProfile/profile";
import toast, { Toaster } from "react-hot-toast";
import { getProfileInfoApi } from "../../../core/services/api/panel/getProfileInfo";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "../../common/magnetic";
import { IoMdMore } from "react-icons/io";
const Avatar = ({ profileImage, currentPic, id }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const { profile } = useSelector((s) => s.profile);
	const dispatch = useDispatch();
	window.addEventListener("click", () => {
		setMenuOpen(false);
	});

	const SelectPicture = async () => {
		const formData = new FormData();
		formData.append("ImageId", id);
		const result = await SelectProfileImage(formData);
		console.log(result);
		profileImage !== profile.currentPictureAddress && result.success
			? toast.success(result.message)
			: toast.error(result.message);
		const resetProfile = await getProfileInfoApi();
		dispatch(setState(resetProfile));
	};

	const DeletePicture = async () => {
		const formData = new FormData();
		formData.append("DeleteEntityId", id);
		const result = await DeleteProfileImage(formData);
		profileImage === profile.currentPictureAddress &&
			SelectPicture(profile.userImage[0]);
		result.success
			? toast.success(result.message)
			: toast.error(result.message);
		const resetProfile = await getProfileInfoApi();
		dispatch(setState(resetProfile));
	};
	return (
		<>
			{isOpen && <PFPFull isOpen={isOpen} setIsOpen={setIsOpen} />}
			<div className="relative">
				<div
					className="group w-full aspect-square rounded-full bg-metricPurple  relative cursor-pointer"
					onClick={() => {
						setIsOpen(true);
					}}
				>
					<img src={profileImage} className="w-full h-full rounded-full" />
					{currentPic === profileImage && (
						<div className="w-full h-full justify-center items-center flex text-sm md:text-lg rounded-full font-medium text-white bg-black/40 absolute top-0 left-0">
							عکس اصلی
						</div>
					)}

				</div>
				<div className="absolute right-4 bottom-0 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-metricGray4">
					<Magnetic>
						<div
							onClick={(e) => {
								e.stopPropagation();
								setMenuOpen(true);
							}}
							className="w-10 h-10 bg-gray-500 flex items-center justify-center text-2xl text-metricWhite rounded-full cursor-pointer"
						>
							<IoMdMore />
						</div>
					</Magnetic>
					<AnimatePresence mode="wait">
						{menuOpen && (
							<motion.div
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -10, opacity: 0 }}
								className="absolute -bottom-16 right-2 w-28 rounded-xl px-2 py-1 flex flex-col gap-2 bg-metricWhite text-metricGray3"
							>
								<div
									onClick={() => {
										DeletePicture();
									}}
									className="py-1 flex hover:text-metricBlack items-center justify-between flex-row-reverse cursor-pointer"
								>
									<MdDelete /> حذف
								</div>
								<div
									onClick={() => {
										SelectPicture();
									}}
									className="py-1 flex hover:text-metricBlack items-center justify-between flex-row-reverse cursor-pointer"
								>
									<MdCheck />
									انتخاب
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
};

export default Avatar;
