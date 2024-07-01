const SearchIcoon = ({ w = 20, h = 20, c = "#000" }) => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.1666 35C27.9111 35 34.9999 27.9112 34.9999 19.1667C34.9999 10.4222 27.9111 3.33333 19.1666 3.33333C10.4221 3.33333 3.33325 10.4222 3.33325 19.1667C3.33325 27.9112 10.4221 35 19.1666 35Z"
				stroke={c}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M36.6666 36.6667L33.3333 33.3333"
				stroke={c}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
export default SearchIcoon;
