import Tag from "../../common/Tag";
// import image
import archiveImg from "../../../assets/Icons/CourseDetails/archive-add.svg";
import archiveAddImg from "../../../assets/Icons/CourseDetails/archive-tick.svg";
import MagneticButton from "../../common/magneticButton";
import LikeImg from "../../../assets/Icons/CourseDetails/vuesax/linear/like.svg";
import DisLikeImg from "../../../assets/Icons/CourseDetails/vuesax/linear/dislike.svg";
import LikeAddImg from "../../../assets/Icons/CourseDetails/like-bold.svg";
import DisLikeAddImg from "../../../assets/Icons/CourseDetails/dislike-bold.svg";

import { useParams } from "react-router-dom";
import {
	ArchiveCourseAPI,
	DeleteArchiveCourseAPI,
	DeleteLikeCourseAPI,
	DissLikeCourseAPI,
	LikeCourseAPI,
} from "../../../core/services/api/CourseDetails";
import toast, { Toaster } from "react-hot-toast";

const TitleCourse = ({ setData, data, FlagHandler }) => {
	const params = useParams();

	const handleArchive = () => {
		!data.isUserFavorite ? addArchive() : delArchive();
	};
	const handleLike = () => {
		data.currentUserLike === "0" ? likeCourse() : deleteLikeCourse();
	};
	const handleDissLike = () => {
		data.currentUserDissLike === "0" && dissLikeCourse();
	};

	const addArchive = async () => {
		const obj = { courseId: params.id };
		const result = await ArchiveCourseAPI(obj);
		if (result.success) {
			toast.success("دوره به لیست علاقه مندی ها اضافه شد");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	const delArchive = async () => {
		const obj = new FormData();
		obj.append("CourseFavoriteId", data.userFavoriteId);
		const result = await DeleteArchiveCourseAPI(obj);
		if (result.success) {
			toast.success("دوره از لیست علاقه مندی ها حذف شد");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	const likeCourse = async () => {
		const res = await LikeCourseAPI(params);
		if (res.success) {
			toast.success("دوره با موفقیت لایک شد");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	const deleteLikeCourse = async () => {
		const obj = new FormData();
		obj.append("CourseLikeId", data.userLikeId);
		const result = await DeleteLikeCourseAPI(obj);
		if (result.success) {
			toast.success("لایک دوره با موفقیت برداشته شد");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	const dissLikeCourse = async () => {
		const res = await DissLikeCourseAPI(params);
		if (res.success) {
			toast.success("دوره با موفقیت دیس لایک شد");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	return (
		<>
			<div className=" rounded-3xl flex flex-col gap-2 justify-between px-8 pt-1">
				<div className="">
					<h2 className=" font-bold text-3xl sm:text-[40px] leading-normal">
						{data.title}
					</h2>
				</div>
				<div className="flex sm:flex-row flex-col justify-between items-start gap-5 sm:items-center">
					<div className="flex  gap-2">
						<Tag name={data.techs} fontSize="14px" padding="5px 15px" />
						<Tag
							name={data.courseLevelName}
							fontSize="14px"
							padding="5px 15px"
						/>
					</div>
					<div className="flex gap-3 flex-row-reverse">
						<div onClick={() => handleArchive()}>
							<MagneticButton width="40px" height="40px">
								{data.isUserFavorite ? (
									<img src={archiveAddImg} className="w-6" />
								) : (
									<img src={archiveImg} className="w-6" />
								)}
							</MagneticButton>
						</div>
						<div onClick={() => handleLike()}>
							<MagneticButton width="40px" height="40px">
								{data.currentUserLike === "1" ? (
									<img src={LikeAddImg} className="w-6" />
								) : (
									<img src={LikeImg} className="w-6" />
								)}
							</MagneticButton>
						</div>
						<div onClick={() => handleDissLike()}>
							<MagneticButton width="40px" height="40px">
								{data.currentUserDissLike === "1" ? (
									<img src={DisLikeAddImg} className="w-6" />
								) : (
									<img src={DisLikeImg} className="w-6" />
								)}
							</MagneticButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TitleCourse;
