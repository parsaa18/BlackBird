import { useEffect, useState } from "react";
import PanelList from "../common/PanelLists";
import { getMyCoursesApi } from "../../core/services/api/panel/getMyCourses";

const MyCourses = () => {
	const [list, setList] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const getMyCourses = async () => {
		const result = await getMyCoursesApi(searchTerm);
		setList(result);
	};
	useEffect(() => {
		getMyCourses();
	}, [searchTerm]);

	return (
		<PanelList
			list={list}
			title="دوره های من"
			number={list["totalCount"]}
			img={"/src/assets/image/Course.jpg"}
			page={1}
			searchTerm={searchTerm}
			setSearchTerm={setSearchTerm}
		/>
	);
};
export default MyCourses;
