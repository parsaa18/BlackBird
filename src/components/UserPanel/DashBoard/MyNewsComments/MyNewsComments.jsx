import { useEffect, useState } from "react";
import { getMyNewsComments } from "../../../../core/services/api/panel/comments";
import { FaArrowLeft } from "react-icons/fa6";
import Comment from "./Comment";
import NewsCommentModal from "./modal/NewsCommentsModal";
import Arrow from "../../../../assets/Icons/CourseList/arrow-right.svg";

const MyNewsComments = () => {
	const [commentList, setCommentList] = useState({ myNewsCommetDtos: [] });
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const getMyComments = async () => {
		const result = await getMyNewsComments();
		setCommentList(result);
	};
	useEffect(() => {
		getMyComments();
	}, []);
	return (
		<>
			{commentList.myNewsCommetDtos.length !== 0 && (
				<NewsCommentModal
					commentList={commentList.myNewsCommetDtos}
					isOpen={modalIsOpen}
					setOpen={setModalIsOpen}
				/>
			)}

			<div
				onClick={() => {
					setModalIsOpen(true);
				}}
				className="w-full h-full flex flex-col gap-3 p-4 cursor-pointer  "
			>
				<div className="flex   items-center justify-between">
					<div className="flex items-center gap-1">
						<span className="font-medium xl:text-3xl md:text-xl leading-none ">
							-
						</span>
						<h4 className="xl:text-2xl md:text-xl font-medium ">
							کامنت های بلاگ{" "}
						</h4>
					</div>
					<div className="p-3 bg-white text-xs rounded-full">
						<img src={Arrow} className="w-4" />
					</div>
				</div>
				<div className="flex flex-col min-h-40 gap-7">
					{commentList.myNewsCommetDtos.length === 0 ? (
						<div className="w-full flex min-h-40 text-metricGray3 text-sm items-center justify-center">
							کامنتی موجود نیست
						</div>
					) : (
						<>
							{commentList.myNewsCommetDtos.slice(0, 2).map((e, i) => {
								return <Comment key={i} comment={e} />;
							})}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default MyNewsComments;
