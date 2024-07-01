import { MdOutlineImageNotSupported } from "react-icons/md";

const ImageContainer = ({ image = "/src/assets/image/ArticleD.jpg" }) => {
	return (
		<div className="w-full h-[450px] flex items-center justify-center bg-gray-200  rounded-3xl overflow-hidden">
			{image ? (
				<img src={image} className="h-full w-full" />
			) : (
				<div className="flex flex-col items-center justify-center gap-3 text-3xl font-bold text-gray-500">
					<MdOutlineImageNotSupported className="text-9xl" />
					عکس از بلاگ موجود نیست
				</div>
			)}
		</div>
	);
};
export default ImageContainer;
