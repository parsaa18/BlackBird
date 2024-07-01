import { useEffect, useState } from "react";
import { getMyCourseComments } from "../../../../core/services/api/panel/comments";
import { FaArrowLeft } from "react-icons/fa6";
import Comment from "./Comment";
import CourseCommentsModal from "./modal/CourseCommentsModal";
import { AnimatePresence } from "framer-motion";
import Arrow from "../../../../assets/Icons/CourseList/arrow-right.svg";

const MyCourseComments = () => {
	const [commentList, setCommentList] = useState({ myCommentsDtos: [] });
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const getMyComments = async () => {
		const result = await getMyCourseComments();
		setCommentList(result);
	};
	useEffect(() => {
		getMyComments();
	}, []);
	return (
		<>
			{commentList.myCommentsDtos.length !== 0 && (
				<CourseCommentsModal
					commentList={commentList.myCommentsDtos}
					isOpen={modalIsOpen}
					setOpen={setModalIsOpen}
				/>
			)}

			<div
				onClick={() => {
					setModalIsOpen(true);
				}}
				className="w-full h-full flex flex-col gap-3 p-4 cursor-pointer "
			>
				<div className="flex items-center justify-between ">
					<div className="flex items-center gap-1">
						<span className="font-medium xl:text-3xl md:text-xl leading-none ">
							-
						</span>
						<h4 className="xl:text-2xl md:text-xl  font-medium ">
							کامنت های دوره{" "}
						</h4>
					</div>
					<div className="p-3 bg-white text-xs rounded-full">
						<img src={Arrow} className="w-4" />
					</div>
				</div>
				<div className="flex flex-col gap-7 min-h-40">
					{commentList.myCommentsDtos.length === 0 ? (
						<div className="w-full min-h-40  text-metricGray3 text-sm flex items-center justify-center">
							کامنتی موجود نیست
						</div>
					) : (
						<>
							{commentList.myCommentsDtos.slice(0, 2).map((e, i) => {
								return <Comment key={i} comment={e} />;
							})}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default MyCourseComments;
