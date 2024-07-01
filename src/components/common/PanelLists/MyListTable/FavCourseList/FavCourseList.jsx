import { ClipLoader } from "react-spinners";
import Course from "../Course";

const FavCourseList = ({ list }) => {
	return (
		<div
			className={`flex flex-col items-center  divide-y divide-gray-400 overflow-y-auto ${
				list["totalCount"] === 2 ? "h-[323px]" : "h-[300px]"
			}  scrolldiv`}
		>
			{!list.favoriteCourseDto ? (
				<ClipLoader size={50} />
			) : (
				list.favoriteCourseDto.map((e, i) => {
					return (
						<>
							<Course list={e} key={i} />
						</>
					);
				})
			)}
		</div>
	);
};

export default FavCourseList;
