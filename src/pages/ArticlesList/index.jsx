import { useEffect, useState } from "react";
import Hero from "../../components/ArticlesList/hero";
import { SyncLoader } from "react-spinners";
import PaginationGrid from "../../components/common/PaginationGrid";
import axios from "axios";
import SideBar from "../../components/ArticlesList/Customize";

import LocomotiveScroll from "locomotive-scroll";
import {
	ArticleListAPI,
	NewsCategoryAPI,
} from "../../core/services/api/ArticleList";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [articlesCategory, setArticlesCategory] = useState([]);
	const [changeFlag, setChangeFlag] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [deleteFilter, setDeleteFilter] = useState(false);


	const NewsCategoryId = searchParams.get("NewsCategoryId");
	const SortingCol = searchParams.get("SortingCol");
	const SortType = searchParams.get("SortType");
	const Query = searchParams.get("Query");

	const itemsPerPage = 9;

	const changeFlager = () => {
		setChangeFlag(!changeFlag);
	};
	const DeleteFilter = () => {
		setDeleteFilter(!deleteFilter);
	};

	const getArticlesList = async () => {
		setLoading(true);
		const res = await ArticleListAPI(
			itemsPerPage,
			SortingCol,
			SortType,
			Query,
			NewsCategoryId
		);
		setArticles(res.news);
		const Category = await NewsCategoryAPI(itemsPerPage);
		setArticlesCategory(Category);
		setLoading(false);
	};
	useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll();
		getArticlesList();
	}, [changeFlag , deleteFilter]);

	return (
		<div className="">
			<Hero />
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed="0.25"
				className=" bg-metricGray4 w-full z-50 py-5 rounded-3xl"
			>
				<div className="py-10 max-w-[1400px] px-[30px] flex flex-col lg:flex-row gap-5 justify-between">
					<SideBar
						articlesCategory={articlesCategory}
						changeFlager={changeFlager}
						DeleteFilter={DeleteFilter}
					/>
					{loading ? (
						<div className="flex items-center justify-center w-full h-[300px]">
							<SyncLoader color="#444" />
						</div>
					) : (
						<PaginationGrid
							list={articles}
							itemsPerPage={itemsPerPage}
							article={true}
							changeFlager={changeFlager}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
export default ArticlesList;
