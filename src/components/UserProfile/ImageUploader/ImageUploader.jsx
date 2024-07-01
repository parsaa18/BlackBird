import { useState } from "react";
import addImg from "../../../assets/Icons/panel-icon/gallery-add.svg";
import ImgCropper from "./ImgCropperModal/ImgCropper";
import { toast, Toaster } from "react-hot-toast";
import dataURLToFileObj from "./dataURLToFileObj";
const ImageUploader = ({ handleImageUpload }) => {
	const [imgSrc, setImgSrc] = useState();
	const [Open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleCrop = async (data) => {
		const file = dataURLToFileObj(data);
		await handleImageUpload(file);
		setLoading(false);
		setOpen(false);
	};

	const selectFile = (e) => {
		const img = e.target.files?.[0];
		if (!img) return;

		const reader = new FileReader();
		reader.addEventListener("load", () => {
			const imgElement = new Image();
			const imgURL = reader.result?.toString() || "";
			imgElement.src = imgURL;
			imgElement.addEventListener("load", (e) => {
				const { naturalWidth, naturalHeight } = e.currentTarget;
				if (naturalHeight < 250 && naturalWidth < 250) {
					toast.error("عکس شما نباید کمتر از 250 پیکسل باشد");
					return setImgSrc("");
				}
			});
			setImgSrc(imgURL);
			setOpen(true);
		});
		reader.readAsDataURL(img);
	};

	return (
		<>
			<div className="w-full">
				<label
					htmlFor="Img"
					className=" border-2 border-gray-500 flex items-center justify-center cursor-pointer  rounded-full transition-all duration-300 text-gray-500 min-w-full aspect-square font-semibold flex-col gap-2 hover:bg-metricWhite/30"
				>
					<img src={addImg} className="w-8 h-8" />
					اضافه عکس
				</label>
				<input
					type="file"
					accept="image/*"
					id="Img"
					className="hidden"
					onChange={selectFile}
				/>
			</div>
			{imgSrc && Open && (
				<ImgCropper
					imgSrc={imgSrc}
					Open={Open}
					setOpen={setOpen}
					setDataUrl={handleCrop}
					setLoading={setLoading}
					loading={loading}
				/>
			)}
		</>
	);
};

export default ImageUploader;
