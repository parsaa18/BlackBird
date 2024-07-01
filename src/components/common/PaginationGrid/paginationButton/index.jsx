import { useNavigate } from "react-router-dom";

const PaginationBtn = ({ totalPage, setCoursePagination, current , changeFlager }) => {

	const navigate = useNavigate()
	const handlePage = (page) => {
		setCoursePagination(page);
		navigate(`/CoursesList?PageNumber=${page}`)
		changeFlager()
		setTimeout(() => {
			window.scrollTo({ top: 300, behavior: "smooth" });
		}, 500);
	};
	return (
		<div className="flex items-center justify-center ltr gap-3 w-full mb-10">
			{Array.from({ length: totalPage }, (item, index) =>
				index + 1 == current ? (
					<button
						className="w-10 h-10 outline-none border-2 bg-metricOrange/15 hover:shadow-md border-metricOrange text-metricOrange  rounded-lg leading-none"
						key={index}
						onClick={() => handlePage(index + 1)}
					>
						{index + 1}
					</button>
				) : (
					<button
						className="w-10 h-10 border border-metricGray3 text-metricGray3 hover:shadow-md rounded-lg leading-none"
						key={index}
						onClick={() => handlePage(index + 1)}
					>
						{index + 1}
					</button>
				)
			)}
		</div>
	);
};

export default PaginationBtn;
