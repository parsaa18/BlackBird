import SearchIcoon from "../../../../../assets/Icons/SearchIcon";

const SearchBar = ({ setQuery }) => {
	const query = (values) => {
		setQuery(values.target.value);
	};

	return (
		<div className="bg-metricWhite rounded-full flex items-center h-12 px-4 gap-2 ">
			<SearchIcoon w={22} h={22} c="#878787" />
			<input
				type="text"
				id="Query"
				name="Query"
				onChange={query}
				placeholder="جست جو دوره "
				className="outline-none text-[13px] border-none bg-transparent w-full placeholder:text-[#a3a3a3] text-[#878787]"
			/>
		</div>
	);
};
export default SearchBar;
