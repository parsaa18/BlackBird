import { useState } from "react";
import MyListHeader from "./MyListHeader";
import MyListSearch from "./MyListSearch";
import MyListTable from "./MyListTable";

const PanelList = ({
	title = "دوره های من",
	list,
	img,
	page,
	number,
	searchTerm,
	setSearchTerm,
}) => {
	return (
		<div className="flex flex-col gap-5 relative overflow-hidden px-2 pr-10 lg:p-0 h-[525px]">
			<MyListHeader title={title} numbers={number} />
			{page === 1 ? (
				<MyListSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			) : (
				<div className="w-full rounded-full h-14 min-h-14 bg-metricGray3/10 flex items-center justify-between px-4"></div>
			)}
			<MyListTable searchTerm={searchTerm} list={list} img={img} page={page} />
		</div>
	);
};
export default PanelList;
