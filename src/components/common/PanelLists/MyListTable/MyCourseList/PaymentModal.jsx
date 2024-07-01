import { useEffect, useState } from "react";
import {
	coursePayment1,
	coursePayment2,
} from "../../../../../core/services/api/panel/coursePayment";
import convertDataUrlToFile from "../../../../UserProfile/ImageUploader/dataURLToFileObj";
import toast, { Toaster } from "react-hot-toast";

const PaymentModal = ({ id, cost, name }) => {
	const [imgSrc, setImgSrc] = useState();
	const [payId, setPayId] = useState();

	const date = new Date().toISOString().slice(0, 10);
	const handleUpload = (e) => {
		setImgSrc(e.target.files[0]);
	};

	const Pay = async () => {
		const formData = new FormData();
		formData.append("CourseId", id);
		formData.append("Paid", cost);
		formData.append("PeymentDate", date);
		formData.append(
			"PaymentInvoiceNumber",
			Math.ceil(Math.random() * 100000000)
		);
		console.log([...formData]);
		const result = await coursePayment1(formData);
		console.log(result);
		result.success ? setPayId(result.id) : toast.error(result.message);
		result.success && toast.success(result.message);
	};
	const sendImg = async () => {
		const formData = new FormData();
		formData.append("PaymentId", payId);
		formData.append("Image", imgSrc);
		console.log([...formData]);
		const result = await coursePayment2(formData);
		result.success
			? toast.success(result.message)
			: toast.error(result.message);
		console.log(result);
	};
	useEffect(() => {
		Pay();
	}, []);

	return (
		<>
			<Toaster />
			<div className="flex w-full h-full  flex-col gap-5 text-metricBlack justify-between">
				<div className="flex flex-col gap-3">
					<h2 className="text-xl font-semibold">
						پرداخت شهریه برای دوره {name}
					</h2>
					<h4>هزینه : {cost}</h4>
				</div>
				{imgSrc && (
					<img src={URL.createObjectURL(imgSrc)} className="max-h-[300px]" />
				)}

				<div className="w-full flex items-center gap-5 justify-center">
					<label
						htmlFor="imgUpload"
						className="py-2 px-8 font-semibold cursor-pointer bg-metricYellow1 rounded-full"
					>
						آپلود فیش واریز
					</label>
					<input
						type="file"
						id="imgUpload"
						accept="image/*"
						onChange={handleUpload}
						className="hidden"
					/>
					<div
						onClick={sendImg}
						className={`${
							!imgSrc
								? "opacity-50 cursor-not-allowed"
								: "opacity-100 cursor-pointer"
						} bg-metricPurple text-metricWhite py-2 px-4 rounded-full `}
					>
						تایید
					</div>
				</div>
			</div>
		</>
	);
};

export default PaymentModal;
