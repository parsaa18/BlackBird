import { useEffect, useState } from "react";
import PanelList from "../common/PanelLists";
import ReservedIcon from "../../assets/Icons/panel-icon/ReservedIcon";
import { getMyFavArticlesApi } from "../../core/services/api/panel/getMyFavArticles";

const MyFavArticles = () => {
	const [list, setList] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const getFavArticles = async () => {
		const result = await getMyFavArticlesApi();
		setList(result);
		console.log(list);
	};
	useEffect(() => {
		getFavArticles();
	}, []);
	return (
		<PanelList
			list={list}
			title="علاقه مندی بلاگ"
			number={list.totalCount}
			img={"/src/assets/image/ArticlePic.jpg"}
			page={4}
			searchTerm={searchTerm}
			setSearchTerm={setSearchTerm}
		/>
	);
};
export default MyFavArticles;
