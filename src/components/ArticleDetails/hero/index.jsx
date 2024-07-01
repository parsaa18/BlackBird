import dateIcon from "../../../assets/Icons/Landing/calendar-2.svg";
import archiveAddImg from "../../../assets/Icons/CourseDetails/archive-tick.svg";
import archiveImg from "../../../assets/Icons/CourseDetails/archive-add.svg";
import DisLikeImg from "../../../assets/Icons/CourseDetails/vuesax/linear/dislike.svg";
import DisLikeAddImg from "../../../assets/Icons/CourseDetails/dislike-bold.svg";
import LikeAddImg from "../../../assets/Icons/CourseDetails/like-bold.svg";
import LikeImg from "../../../assets/Icons/CourseDetails/vuesax/linear/like.svg";
import eyes from "../../../assets/Icons/Landing/eye.svg";

import Reveal from "../../common/reveal";
import Tag from "../../common/Tag";
import MagneticButton from "../../common/magneticButton";
import { useParams } from "react-router-dom";
import {
	ArticleArchiveAPI,
	ArticleDeleteArchiveAPI,
	ArticleDeleteDissLikeAPI,
	ArticleDissLikeAPI,
	ArticleLikeAPI,
} from "../../../core/services/api/ArticleDetails";
import toast, { Toaster } from "react-hot-toast";

const Hero = ({
	title,
	tag,
	date,
	name,
	minidisc,
	FlagHandler,
	likeId,
	isCurrentUserFavorite,
	articleData,
}) => {
	const params = useParams();

	const handleArchive = () => {
		!articleData.isCurrentUserFavorite ? addArchive() : delArchive();
	};
	const handleLike = () => {
		!articleData.currentUserIsLike ? likeNews() : deleteLikeNews();
	};
	const handleDissLike = () => {
		!articleData.currentUserIsDissLike && dissLikeNews();
	};

	const addArchive = async () => {
		const result = await ArticleArchiveAPI(params.id);
		if (result.success) {
			toast.success("دمت گرم داش");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	const delArchive = async () => {
		const obj = { deleteEntityId: articleData.currentUserFavoriteId };
		// const obj = new FormData();
		// obj.append("CourseFavoriteId", data.userFavoriteId);
		const result = await ArticleDeleteArchiveAPI(obj);
		toast(result.message);
		FlagHandler();
	};

	const likeNews = async () => {
		const res = await ArticleLikeAPI(params.id);
		if (res.success) {
			toast.success("لایک شد داش");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	const deleteLikeNews = async () => {
		const obj = { deleteEntityId: likeId };
		const result = await ArticleDeleteDissLikeAPI(obj);
		if (result.success) {
			toast.success("لایک برداشته شد داش");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	const dissLikeNews = async () => {
		const res = await ArticleDissLikeAPI(params.id);
		if (res.success) {
			toast.success("دیس لایک شد داش");
			FlagHandler();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	return (
		<section className="flex flex-col gap-10">
			<Toaster />
			<div className="flex justify-between flex-col lg:flex-row gap-5 lg:gap-10 lg:ml-20 xl:ml-80">
				<div className=" flex flex-col gap-4 ">
					<Reveal del={0.1} dur={0.4} dirX={true}>
						<h1 className=" text-xl sm:text-4xl font-bold leading-normal ">
							{title}
						</h1>
					</Reveal>
					<div className="flex gap-2">
						<Reveal del={0.1} dur={0.6} dir={-200}>
							<Tag name={tag} padding={"5px 20px"} fontSize="15px" />
						</Reveal>
					</div>
				</div>
				<div className="pt-2">
					<Reveal dirX={true}>
						<p className="md:w-[450px] text-justify text-xs sm:text-base ">
							{minidisc}
						</p>
					</Reveal>
				</div>
			</div>
			<Reveal dirX={true} dur={0.3} del={0.5}>
				<div className="flex items-center justify-between flex-col gap-5 md:flex-row">
					<div className="flex items-center justify-between w-full gap-5">
						<div className="writer flex items-center gap-2">
							<div className="w-14 h-14 overflow-hidden  flex items-center justify-center rounded-full">
								<img src="/src/assets/image/Image(2).jpg" />
							</div>
							<div className="flex flex-col gap-3 ">
								<h3 className="leading-none font-bold ">{name}</h3>
								<p className="leading-none text-sm text-gray-500">استاد</p>
							</div>
						</div>
						<div className="dateView flex flex-col gap-1">
							<Reveal dur={0.3} dirX={true} dir={50} del={0.7}>
								<div className="flex items-center gap-2">
									<img src={dateIcon} className="w-6" />
									<p>{date}</p>
								</div>
							</Reveal>
							<Reveal dur={0.3} dirX={true} dir={50} del={0.7}>
								<div className="flex items-center gap-2">
									<img src={eyes} className="w-6" />
									<p>{articleData.currentView}</p>
								</div>
							</Reveal>
						</div>
					</div>
					<div className="handlers w-full ">
						<div className="flex gap-5 justify-center md:justify-start  flex-row-reverse">
							<div onClick={() => handleArchive()}>
								<MagneticButton width="40px" height="40px">
									{isCurrentUserFavorite ? (
										<img src={archiveAddImg} className="w-6" />
									) : (
										<img src={archiveImg} className="w-6" />
									)}
								</MagneticButton>
							</div>
							<div onClick={() => handleLike()}>
								<MagneticButton width="40px" height="40px">
									{articleData.currentUserIsLike ? (
										<img src={LikeAddImg} className="w-6" />
									) : (
										<img src={LikeImg} className="w-6" />
									)}
								</MagneticButton>
							</div>
							<div onClick={() => handleDissLike()}>
								<MagneticButton width="40px" height="40px">
									{articleData.currentUserIsDissLike ? (
										<img src={DisLikeAddImg} className="w-6" />
									) : (
										<img src={DisLikeImg} className="w-6" />
									)}
								</MagneticButton>
							</div>
						</div>
					</div>
				</div>
			</Reveal>
		</section>
	);
};
export default Hero;
