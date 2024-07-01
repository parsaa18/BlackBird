import { ClipLoader } from "react-spinners";
import MyCourse from "./MyCourse";

const MyCourseList = ({ list }) => {
	return (
		<div
			className={`flex flex-col items-center  divide-y divide-gray-400 overflow-y-auto ${
				list["totalCount"] === 2 ? "h-[323px]" : "h-[300px]"
			}  scrolldiv`}
		>
			{!list.listOfMyCourses ? (
				<ClipLoader size={50} />
			) : (
				list.listOfMyCourses.map((e, i) => {
					return (
						<>
							<MyCourse list={e} key={i} />
						</>
					);
				})
			)}
		</div>
	);
};

export default MyCourseList;
