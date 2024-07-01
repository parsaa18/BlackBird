import { useState } from "react";
import SearchIcoon from "../../../../assets/Icons/SearchIcon";
import { CiFilter } from "react-icons/ci";
import { CgSortAz } from "react-icons/cg";

const MyListSearch = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="w-full rounded-full h-14 min-h-14 bg-metricGray3/10 flex items-center justify-between px-4">
			<div className="flex items-center gap-1 bg-metricGray3/30  rounded-full cursor-pointer">
				<label
					htmlFor="search"
					onClick={() => {
						setSearchIsOpen(true);
					}}
					className="cursor-pointer h-10 flex items-center px-3 "
				>
					<SearchIcoon w={20} h={20} c={"#000"} />
				</label>
				<input
					type="text"
					id="search"
					className="bg-transparent outline-none text-metricBlack h-10 placeholder:text-metricBlack transition-all duration-[0.4s] w-60 max-w-20 focus:max-w-60 md:text-base text-xs"
					placeholder="جستجو"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};
export default MyListSearch;
