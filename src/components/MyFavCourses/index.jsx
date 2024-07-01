import { useEffect, useState } from "react";
import PanelList from "../common/PanelLists";
import { getMyFavCoursesApi } from "../../core/services/api/panel/getMyFavCourses";

const MyFavCourses = () => {
	const [list, setList] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const getMyFavCourses = async () => {
		const result = await getMyFavCoursesApi();
		setList(result);
	};
	useEffect(() => {
		getMyFavCourses();
	}, []);

	return (
		<PanelList
			list={list}
			title="علاقه مندی دوره"
			number={list["totalCount"]}
			page={3}
			searchTerm={searchTerm}
			setSearchTerm={setSearchTerm}
		/>
	);
};
export default MyFavCourses;
