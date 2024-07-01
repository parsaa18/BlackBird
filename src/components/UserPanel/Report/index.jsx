import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import MagneticButton from "../../common/magneticButton";
import Modal from "../../common/Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
	AllTicketUserAPI,
	NewTicketAPI,
} from "../../../core/services/api/Ticket/Ticket";
import { DescribeTicket } from "../../../core/validation/Ticket";
import toast, { Toaster } from "react-hot-toast";
import { dateModifier } from "../../../core/utils/dateModifier";
import TicketsTable from "./TicketsTable";

const Report = () => {
	const [accordion, setAccordion] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [allTicket, setAllTicket] = useState([]);
	const [changeFlag, setChangeFlag] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleFlag = () => {
		setChangeFlag(!changeFlag);
	};

	const handleSendTicket = async (value) => {
		const obj = {
			title: value.Title,
			creator: creator,
			type: value.SelectIssue,
			message_body: value.Describe,
		};
		const res = await NewTicketAPI(obj);
		if (res.success) {
			toast.success("گزارش با موفقیت ارسال شد");
			handleFlag();
			closeModal();
		} else {
			toast.error("گزارش ناموفق است");
		}
	};
	const getCurrentUserId = () => {
		const userList = JSON.parse(localStorage.getItem("UsersList"));
		const activeUser = userList.filter((e) => {
			return e.isActive;
		});
		return activeUser?.[0]?.id;
	};
	const creator = getCurrentUserId();

	const CallApi = async () => {
		const userId = getCurrentUserId();
		const res = await AllTicketUserAPI(userId);
		setAllTicket(res.tickets);
	};

	useEffect(() => {
		CallApi();
	}, [changeFlag]);

	return (
		<>
			<Toaster />
			<div className="flex flex-col">
				<Modal isOpen={isModalOpen} onClose={closeModal} height="490px">
					<div className="px-2 py-1">
						<div className="flex gap-20">
							<button onClick={closeModal}>انصراف</button>
							<h2 className="font-semibold">گزارش جدید</h2>
						</div>
						<Formik
							initialValues={{ SelectIssue: "", Title: "", Describe: "" }}
							validationSchema={DescribeTicket}
							onSubmit={handleSendTicket}
						>
							<Form>
								<div className="flex flex-col gap-4 pt-6">
									<div className="flex flex-col gap-2">
										<h2 className="text-sm font-medium">موضوع گزارش</h2>
										<Field
											as="select"
											name="SelectIssue"
											className="rounded-full border border-gray-300 bg-white py-[9px] px-3 text-metricGray3 font-Iransans text-sm"
										>
											<option value="پرداخت دوره">پرداخت دوره ناقص </option>
											<option value="مشکل حساب کاربری">مشکل حساب کاربری</option>
											<option value="مشکل پاک نشدن عکس پروفایل">
												مشکل پاک نشدن عکس پرفایل
											</option>
											<option value="مشکل ورود به حساب کاربری دیگر">
												مشکل ورود به حساب کاربری دیگر
											</option>
											<option value="Nothing">دلایل دیگر</option>
										</Field>
										<h2 className="text-red-400 text-xs font-medium mr-4">
											<ErrorMessage name="SelectIssue" />
										</h2>
									</div>
									<div className="flex flex-col gap-2">
										<h2 className="text-sm font-medium">موضوع</h2>
										<Field
											type="text"
											id="Title"
											name="Title"
											placeholder="موضوع گزارش را وارد کنید"
											className="w-full py-[10px] border border-gray-300 text-sm rounded-full outline-none placeholder-metricGray3/50 font-normal px-4 "
										/>
										<h2 className="text-red-400 text-xs font-medium mr-4">
											<ErrorMessage name="Title" />
										</h2>
									</div>
									<div className="flex flex-col gap-2">
										<h2 className="text-sm font-medium">توضیحات</h2>
										<Field
											as="textarea"
											id="Describe"
											name="Describe"
											placeholder="توضیحات گزارش را وارد کنید"
											className="w-full py-[10px] border border-gray-300  text-sm rounded-3xl resize-none outline-none placeholder-metricGray3/50 font-normal px-4 "
										/>
										<h2 className="text-red-400 text-xs font-medium mr-4">
											<ErrorMessage name="Describe" />
										</h2>
									</div>
									<button type="submit">
										<MagneticButton width="140px" height="40px">
											<h2 className="text-sm text-white">ارسال گزارش</h2>
										</MagneticButton>
									</button>
								</div>
							</Form>
						</Formik>
					</div>
				</Modal>
				<div>
					<h1 className="text-5xl leading-normal font-extrabold">گزارش</h1>
				</div>
				<div className="h-12 pt-10">
					<div onClick={openModal}>
						<MagneticButton width="150px" height="40px">
							<h1 className="text-sm text-white">ایجاد گزارش جدید</h1>
						</MagneticButton>
					</div>
				</div>
				<div className="flex gap-8 pt-12 h-full">
					<div className="bg-metricWhite border border-metricGray3/30 w-2/3 h-[400px] scrolldiv overflow-y-auto  rounded-3xl">
						<div className="py-2 mx-2">
							<table className=" w-full border-collapse  bg-metricWhite text-left text-sm text-metricGray3">
								<thead className="bg-metricWhite ">
									<tr>
										<th
											scope="col"
											className="text-right px-6 py-4 font-medium text-metricBlack"
										>
											شماره گزارش
										</th>
										<th
											scope="col"
											className="text-right px-4  py-4 font-medium text-metricBlack"
										>
											موضوع
										</th>
										<th
											scope="col"
											className="px-4 py-4  text-right font-medium text-metricBlack"
										>
											توضیحات
										</th>
										<th
											scope="col"
											className="px-4 py-4 text-right font-medium text-metricBlack"
										>
											تاریخ ارسال
										</th>
										<th
											scope="col"
											className="px-6 py-4 font-medium text-right text-metricBlack"
										>
											وضعیت
										</th>
									</tr>
								</thead>
								<tbody className="   ">
									{allTicket !== 0 ? (
										allTicket.map((item, i) => (
											<TicketsTable
												key={i}
												item={item}
												userId={creator}
												handleFlag={handleFlag}
											/>
										))
									) : (
										<h2 className="top-0.5 left-0.5">شما هیچ گزارشی ندارید</h2>
									)}
								</tbody>
							</table>
						</div>
					</div>

					<div className="bg-metricWhite flex flex-col border border-metricGray3/30 overflow-hidden w-1/3 h-full  rounded-3xl">
						<h2 className="pr-5 pt-3 font-semibold text-metricBlack">
							سوالات پر تکرار
						</h2>
						<Accordion className="flex flex-col pt-2" open={accordion === 1}>
							<AccordionHeader
								className="flex items-center justify-start gap-2 text-metricBlack hover:text-metricGray3 pr-5 font-Iransans  outline-none"
								onClick={() => {
									accordion === 1 ? setAccordion(0) : setAccordion(1);
								}}
							>
								<h4 className="text-sm font-medium">
									دوره پرداختی به دوره های من اضافه نشده؟
								</h4>
								<IoIosArrowBack
									className={
										accordion === 1
											? "-rotate-90 transition-all duration-150"
											: "rotate-0 transition-all duration-150"
									}
								/>
							</AccordionHeader>
							<AccordionBody>
								<h2 className="font-Iransans font-normal text-sm px-5">
									دوره های پرداختی در زمان 7 الی 24 ساعت به "دوره های من " اضافه
									خواهد شد
								</h2>
							</AccordionBody>
						</Accordion>
						<Accordion className="flex flex-col " open={accordion === 2}>
							<AccordionHeader
								className="flex items-center justify-start gap-2 text-metricBlack hover:text-metricGray3 pr-5 font-Iransans  outline-none"
								onClick={() => {
									accordion === 2 ? setAccordion(0) : setAccordion(2);
								}}
							>
								<h4 className="text-sm font-medium">
									چطور میتونم یک دوره را رزرو کنم؟
								</h4>
								<IoIosArrowBack
									className={
										accordion === 2
											? "-rotate-90 transition-all duration-150"
											: "rotate-0 transition-all duration-150"
									}
								/>
							</AccordionHeader>
							<AccordionBody>
								<h2 className="font-Iransans font-normal text-sm px-5">
									در صفحه جزییات دوره میتوانید با زدن دکمه "رزرو دوره " آن را
									رزرو کنید
								</h2>
							</AccordionBody>
						</Accordion>
						<Accordion className="flex flex-col " open={accordion === 3}>
							<AccordionHeader
								className="flex items-center justify-start gap-2 text-metricBlack hover:text-metricGray3 pr-5 font-Iransans  outline-none"
								onClick={() => {
									accordion === 3 ? setAccordion(0) : setAccordion(3);
								}}
							>
								<h4 className="text-sm font-medium">
									زمان انتظار جوابگویی ادمین ها به گزارش شما؟
								</h4>
								<IoIosArrowBack
									className={
										accordion === 3
											? "-rotate-90 transition-all duration-150"
											: "rotate-0 transition-all duration-150"
									}
								/>
							</AccordionHeader>
							<AccordionBody>
								<h2 className="font-Iransans font-normal text-sm px-5">
									ادمین های ما در مدت زمان 7 الی 24 ساعت به گزارش شما پاسخ
									خواهند داد
								</h2>
							</AccordionBody>
						</Accordion>
					</div>
				</div>
			</div>
		</>
	);
};

export default Report;
