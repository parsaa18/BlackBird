import { useEffect, useState } from "react";
import { dateModifier } from "../../../core/utils/dateModifier";
import Modal from "../../common/Modal";
import {
	CloseTicketAPI,
	NewMessageAPI,
	ReqTicketAPI,
} from "../../../core/services/api/Ticket/Ticket";
import { useSelector } from "react-redux";
import { HiUser } from "react-icons/hi";
import admin from "../../../assets/Icons/panel-icon/user-octagon.svg";
import sendImage from "../../../assets/Icons/panel-icon/send-2.svg";
import disableSendImage from "../../../assets/Icons/panel-icon/minus-cirlce.svg";

import { Field, Form, Formik } from "formik";
import MagneticButton from "../../common/magneticButton";
import toast from "react-hot-toast";

const TicketsTable = ({ item, userId, handleFlag }) => {
	const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
	const [ticketDetail, setTicketDetail] = useState([]);

	const openTicketModal = () => {
		setIsTicketModalOpen(true);
	};
	const closeTicketModal = () => {
		setIsTicketModalOpen(false);
	};

	const ticketId = async () => {
		openTicketModal();
		const res = await ReqTicketAPI(item.req_id);
		setTicketDetail(res);
	};
	const { profile } = useSelector((s) => s.profile);

	const NewMessage = async (value) => {
		const obj = {
			req_id: item.req_id,
			message_body: value.message,
			type: "user",
			sender: userId,
		};
		const res = await NewMessageAPI(obj);
		ticketId();
	};

	const CloseTicket = async () => {
		const res = await CloseTicketAPI(item.req_id);
		if (res.success) {
			handleFlag();
			toast.success("گزارش با موفقیت بسته شد");
			closeTicketModal();
		} else {
			toast.error("مشکلی پیش آمده کسکم");
		}
	};

	return (
		<>
			<tr
				onClick={ticketId}
				className="hover:bg-metricPurple/10 cursor-pointer border-t border-metricGray3/10"
			>
				<th className="flex gap-3 justify-center items-center  px-6 w-32 py-7 font-normal text-metricBlack">
					<div className="text-sm truncate">#{item.id}</div>
				</th>
				<td className="px-2 py-4">
					<span className="flex items-center w-32 text-right gap-1 rounded-full bg-gmetbg-metricWhite px-2 py-1 text-xs font-semibold text-green-600">
						<span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
						{item.type}
					</span>
				</td>
				<td className="px-4 py-4 text-right truncate">
					{item.title ? item.title : "توضیح ندارد"}
				</td>
				<td className="px-4 py-4">
					<div className="flex gap-2">{dateModifier(item.createAt)}</div>
				</td>
				<td className="px-8 py-4">
					<div className="flex gap-4">
						{item.status === "open" ? (
							<span className="flex items-center text-right gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
								<span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
								باز
							</span>
						) : (
							<span className="flex items-center text-right gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
								<span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
								بسته
							</span>
						)}
					</div>
				</td>
			</tr>
			<Modal
				isOpen={isTicketModalOpen}
				onClose={closeTicketModal}
				height="500px"
				width="600px"
			>
				<div className="p-2 overflow-hidden">
					<div className="title flex flex-row-reverse justify-between">
						<h2 onClick={closeTicketModal} className="cursor-pointer">
							بستن
						</h2>
						<h1 className="text-xl font-semibold">{item.type}</h1>
					</div>
					<div className="Info h-16 pt-5">
						<div className="flex gap-8 items-center">
							<h2 className="flex gap-2">
								شماره گزارش:<h2 className="font-medium">#{item.id}</h2>
							</h2>
							<h2 className="flex gap-2">
								تاریخ ارسال:
								<h2 className="font-medium">{dateModifier(item.createAt)}</h2>
							</h2>
							<h2 className="flex gap-2">
								وضعیت:
								{item.status === "open" ? (
									<span className="flex items-center text-right gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
										<span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
										باز
									</span>
								) : (
									<span className="flex items-center text-right gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
										<span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
										بسته
									</span>
								)}
							</h2>
							{item.status === "open" ? (
								<button onClick={CloseTicket}>
									<MagneticButton width="90px" height="32px">
										<h2 className="text-[12px] text-white">بستن گزارش</h2>
									</MagneticButton>
								</button>
							) : (
								""
							)}
						</div>
					</div>
					<div className="chat bg-metricGray2 h-[300px] rounded-2xl p-4 overflow-auto shadow-inner">
						{ticketDetail.map((message, b) =>
							message.type === "user" ? (
								<div key={b} className="flex flex-col">
									<div className="bg-metricOrange p-4 rounded-xl flex flex-col mb-4 gap-3 w-2/3 text-right">
										<div className="flex items-center gap-2">
											{profile.currentPictureAddress !== "Not-set" ? (
												<img
													src={profile.currentPictureAddress}
													className="min-w-9 w-9 rounded-full cursor-pointer"
												/>
											) : (
												<div className="p-4 rounded-full border-2 border-metricGray3 ">
													<HiUser className="text-2xl text-metricGray3" />
												</div>
											)}
											<h2 className="font-medium">
												{profile["fName"] + profile["lName"] &&
													profile["fName"] +
														" " +
														profile["lName"] +
														" " +
														"(شما)"}
											</h2>
											<span className="h-1.5 w-1.5 rounded-full bg-metricWhite/40"></span>
											<h2 className="font-medium">
												{dateModifier(message.createAt)}
											</h2>
										</div>
										<div className="flex flex-col gap-1">
											<p className="text-sm">{message.message_body}</p>
										</div>
									</div>
								</div>
							) : (
								<div key={b} className="flex flex-col items-end">
									<div className="bg-metricGray p-4 rounded-xl flex flex-col gap-3 w-2/3 text-right">
										<div className="flex items-center gap-2">
											<img
												src={admin}
												className="min-w-9 w-9 rounded-full cursor-pointer"
											/>
											<h2 className="font-medium">ادمین پشتیبان</h2>
											<span className="h-1.5 w-1.5 rounded-full bg-metricGray3"></span>
											<h2 className="font-medium">
												{dateModifier(message.createAt)}
											</h2>
										</div>
										<div className="flex flex-col gap-1">
											<p className="text-sm">{message.message_body}</p>
										</div>
									</div>
								</div>
							)
						)}
					</div>
					<Formik initialValues={{ message: "" }} onSubmit={NewMessage}>
						<Form>
							<div className="flex flex-row-reverse justify-end items-center gap-3 pt-4">
								{item.status === "open" ? (
									<Field
										type="text"
										id="message"
										name="message"
										placeholder="پیام خود را وارد کنید"
										className="w-full py-[10px] border border-gray-300 text-sm rounded-full outline-none placeholder-metricGray3/50 font-normal px-4 "
									/>
								) : (
									<h2 className="text-metricGray3">
										وضعیت گزارش بسته است و امکان ارسال پیام را ندارید
									</h2>
								)}

								<button type="submit">
									<MagneticButton width="40px" height="40px">
										{item.status === "open" ? (
											<img src={sendImage} />
										) : (
											<img src={disableSendImage} />
										)}
									</MagneticButton>
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</Modal>
		</>
	);
};

export default TicketsTable;
