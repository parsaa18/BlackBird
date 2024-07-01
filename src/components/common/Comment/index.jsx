import { useState, useEffect } from "react";
import {
	AddCourseCommentAPI,
	CommentAPI,
} from "../../../core/services/api/Comment";
import Modal from "../Modal";
import { motion } from "framer-motion";
import Plus from "../../../assets/Icons/CourseDetails/add.svg";
import ContainerComment from "./containerComment";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addCommentValidation } from "../../../core/validation/Comment";
import { HiX } from "react-icons/hi";

const NestedCommentSystem = ({ params }) => {
	const [flag, setFlag] = useState(false);
	const [viewMore, setViewMore] = useState(false);

	const [comments, setComments] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const courseId = params.id;

	const CallApi = async () => {
		const res = await CommentAPI(courseId);
		setComments(res);
	};

	const changeFlagHandle = () => {
		setFlag(!flag);
	};

	useEffect(() => {
		CallApi();
	}, [flag]);

	const addCourseComment = async (values) => {
		console.log(values, "value");
		const obj = new FormData();
		obj.append("CourseId", courseId);
		obj.append("Title", values.Title);
		obj.append("Describe", values.Describe);
		const result = await AddCourseCommentAPI(obj);
		if (result.success) {
			toast.success("کامنت اضافه شد داش");
			changeFlagHandle();
			closeModal();
		} else {
			toast.error("ارور بدبخت");
		}
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="p-8 flex justify-center flex-col rounded-3xl h-full">
			<div className="flex w-full justify-between mb-5">
				<h3 className="text-3xl font-bold">نظرات</h3>

				<motion.button
					onClick={openModal}
					className="bg-metricOrange pl-10 pr-7 py-2 rounded-full font-medium flex items-center justify-center gap-1"
					whileHover={{ scale: 1.05 }}
				>
					<img src={Plus} className="w-6" />
					نظر شما
				</motion.button>
				<div className="w-16"></div>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<div className="flex justify-between">
					<button onClick={closeModal}>انصراف</button>
					<h2 className="font-semibold text-xl">نظر شما</h2>
					<div className="w-12"></div>
				</div>
				<Formik
					initialValues={{ Title: "", Describe: "" }}
					validationSchema={addCommentValidation}
					onSubmit={addCourseComment}
					className="mt-4 font-medium"
				>
					<Form>
						<div className="pt-4">
							<label htmlFor="Title" className="font-medium">
								عنوان نظر
							</label>
							<Field
								type="text"
								id="Title"
								name="Title"
								placeholder="عنوان نظر خود را وارد کنید ..."
								className="w-full p-3 my-2 border border-gray-300 rounded-full outline-none placeholder-metricGray3 placeholder-opacity-50 font-normal px-4  "
							/>
							<h2 className="text-red-400 text-xs font-medium mr-4">
								<ErrorMessage name="Title" />
							</h2>
						</div>
						<div className="pt-4">
							<label htmlFor="Describe" className="font-medium">
								توضیحات بیشتر
							</label>
							<Field
								as="textarea"
								id="Describe"
								name="Describe"
								placeholder="توضیحات بیشتر خود را وارد کنید ..."
								className="w-full border h-28 my-2 resize-none border-gray-300 rounded-3xl outline-none placeholder-metricGray3 placeholder-opacity-50 font-normal px-4 py-2"
							/>
							<h2 className="text-red-400 text-xs font-medium mr-4">
								<ErrorMessage name="Describe" />
							</h2>
						</div>

						<button
							type="submit"
							className="bg-metricPurple text-metricBlack px-4 py-2 rounded-full mt-2"
						>
							ثبت نظر
						</button>
					</Form>
				</Formik>
			</Modal>
			<div className=" bg-metricGray4 py-1 px-1 rounded-3xl  w-full">
				<ul className=" p-2 flex flex-col gap-5 m-7  max-w-[900px] sm:w-[420px] sm:min-w-96">
					{viewMore
						? comments.map((comment, id) => (
								<>
									<ContainerComment
										key={id}
										id={id}
										openModal={openModal}
										closeModal={closeModal}
										commentData={comment}
										params={params}
										changeFlagHandle={changeFlagHandle}
									/>
								</>
						  ))
						: comments.slice(0, 3).map((comment, id) => (
								<>
									<ContainerComment
										key={id}
										id={id}
										openModal={openModal}
										closeModal={closeModal}
										commentData={comment}
										params={params}
										changeFlagHandle={changeFlagHandle}
									/>
								</>
						  ))}
				</ul>
				{comments.length > 3 && (
					<div className="w-full flex items-center justify-center p-10">
						<div
							onClick={() => {
								setViewMore(!viewMore);
							}}
							className="px-8 font-semibold cursor-pointer py-2 flex items-center justify-center gap-2 bg-metricYellow1 rounded-full flex-row-reverse hover:scale-105 transition-all duration-200"
						>
							{viewMore ? (
								<>
									مشاهده کمتر
									<HiX className="text-2xl my-1" />
								</>
							) : (
								<>
									<img src={Plus} />
									مشاهده بیشتر
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NestedCommentSystem;
