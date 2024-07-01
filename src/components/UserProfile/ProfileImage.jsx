import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import {
	AddProfileImage,
	SelectProfileImage,
} from "../../core/services/api/panel/ProfileImage";
import { getProfileInfoApi } from "../../core/services/api/panel/getProfileInfo";
import { useDispatch } from "react-redux";
import { setState } from "../../core/provider/userProfile/profile";
import { useEffect } from "react";
import Avatar from "./Avatar/Avatar";
import toast, { Toaster } from "react-hot-toast";
import ImageUploader from "./ImageUploader/ImageUploader";
const ProfileImage = () => {
	const { profile } = useSelector((s) => s.profile);
	const dispatch = useDispatch();

	const handleImageUpload = async (image) => {
		let formData = new FormData();
		formData.append("formFile", image);
		const result = await AddProfileImage(formData);
		console.log(result);
		if (result.success) {
			const resetProfile = await getProfileInfoApi();
			dispatch(setState(resetProfile));
			profile.currentPictureAddress === "Not-set" &&
				selectProfileImage(resetProfile.userImage[0].id);
			toast.success(result.message);
		}
	};

	const selectProfileImage = async (id) => {
		let formData = new FormData();
		formData.append("ImageId", id);
		const result = await SelectProfileImage(formData);
		const resetProfile = await getProfileInfoApi();
		dispatch(setState(resetProfile));
	};

	return (
		<>
			<Toaster />
			<div
				className={` gap-4 rounded-[5rem] xl:rounded-[8rem]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:min-w-[800px] justify-items-center item-center     p-4 bg-metricGray4`}
			>
				{!profile["userImage"] ? (
					<ClipLoader size={50} className="col-span-3" />
				) : (
					profile["userImage"].map((e, i) => {
						return (
							<Avatar
								profileImage={e.puctureAddress}
								currentPic={profile.currentPictureAddress}
								id={e.id}
								key={i}
							/>
						);
					})
				)}
				<ImageUploader handleImageUpload={handleImageUpload} />
			</div>
		</>
	);
};

export default ProfileImage;
