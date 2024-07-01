import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdCheck, MdClose, MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import {
	DeleteProfileImage,
	SelectProfileImage,
} from "../../../core/services/api/panel/ProfileImage";
import { getProfileInfoApi } from "../../../core/services/api/panel/getProfileInfo";
import { setState } from "../../../core/provider/userProfile/profile";
import Magnetic from "../../common/magnetic";

const PFPFull = ({ isOpen, setIsOpen }) => {
	const { profile } = useSelector((s) => s.profile);
	const dispatch = useDispatch();

	const SelectPicture = async (image) => {
		const formData = new FormData();
		formData.append("ImageId", image.id);
		const result = await SelectProfileImage(formData);
		console.log(result);
		image.puctureAddress !== profile.currentPictureAddress && result.success
			? toast.success(result.message)
			: toast.error(result.message);
		const resetProfile = await getProfileInfoApi();
		dispatch(setState(resetProfile));
	};

	const DeletePicture = async (image) => {
		const formData = new FormData();
		formData.append("DeleteEntityId", image.id);
		const result = await DeleteProfileImage(formData);
		image.puctureAddress === profile.currentPictureAddress &&
			SelectPicture(profile.userImage[0]);
		result.success
			? toast.success(result.message)
			: toast.error(result.message);
		const resetProfile = await getProfileInfoApi();
		dispatch(setState(resetProfile));
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<div className="ltr fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center">
			<Toaster />
			<div
				className="bg-black/60 backdrop-blur w-full h-full absolute"
				onClick={() => {
					setIsOpen(false);
				}}
			></div>

			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="w-[600px] h-full"
			>
				{profile["userImage"].map((e, i) => {
					return (
						<SwiperSlide
							key={i}
							className="flex items-center justify-center w-full h-full p-8 "
						>
							<div className="w-[90%] h-[90%] relative">
								<img
									src={e.puctureAddress}
									className="w-full h-full object-cover rounded-lg"
								/>
								<div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start gap-2">
									<Magnetic>
										<div
											onClick={() => {
												setIsOpen(false);
											}}
											className=" p-1   bg-metricWhite rounded-full cursor-pointer"
										>
											<MdClose className="text-2xl text-metricBlack" />
										</div>
									</Magnetic>
									<div className="flex flex-col gap-2">
										{e.puctureAddress !== profile.currentPictureAddress && (
											<Magnetic>
												<div
													onClick={() => {
														SelectPicture(e);
													}}
													className=" p-1   bg-metricWhite rounded-full cursor-pointer"
												>
													<MdCheck className="text-2xl text-metricBlack" />
												</div>
											</Magnetic>
										)}
										<Magnetic>
											<div
												onClick={() => {
													DeletePicture(e);
												}}
												className=" p-1   bg-metricWhite rounded-full cursor-pointer"
											>
												<MdDelete className="text-2xl text-metricBlack" />
											</div>
										</Magnetic>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default PFPFull;
