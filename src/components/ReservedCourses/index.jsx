import { useEffect, useState } from "react";
import PanelList from "../common/PanelLists";
import ReservedIcon from "../../assets/Icons/panel-icon/ReservedIcon";
import { getMyReservedCoursesApi } from "../../core/services/api/panel/getReservedCourses";
import toast, { Toaster } from "react-hot-toast";

const ReservedCourses = () => {
	const [list, setList] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	console.log(list);
	const getMyList = async () => {
		const result = await getMyReservedCoursesApi(searchTerm);
		result && setList(result);
	};
	useEffect(() => {
		getMyList();
	}, []);

	return (
		<>
			<Toaster />
			<PanelList
				list={list}
				title="رزرو های من"
				number={list.length}
				img={"/src/assets/image/Course.jpg"}
				page={2}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
		</>
	);
};
export default ReservedCourses;
