const TagFilter = ({ developing, noob, pro, handleFilter }) => {
	return (
		<div className="text-xs flex flex-wrap gap-1">
			<div className="flex">
				<input
					ref={developing}
					type="radio"
					id="developing"
					name="tag"
					className="peer hidden"
					onChange={handleFilter}
				/>
				<label
					htmlFor="developing"
					className=" border border-gray-400 rounded-3xl py-2 px-3 cursor-pointer text-xs peer-checked:bg-metricGreen peer-checked:text-white peer-checked:border-none peer-checked:font-bold transition-all duration-150"
				>
					برنامه نویسی
				</label>
			</div>
			<div className="flex">
				<input
					ref={noob}
					type="radio"
					id="noob"
					name="tag"
					className="peer hidden"
					onChange={handleFilter}
				/>
				<label
					htmlFor="noob"
					className=" border border-gray-400 rounded-3xl py-2 px-3 cursor-pointer text-xs peer-checked:bg-metricGreen peer-checked:text-white peer-checked:border-none peer-checked:font-bold transition-all duration-150"
				>
					مبتدی
				</label>
			</div>
			<div className="flex">
				<input
					ref={pro}
					type="radio"
					id="pro"
					name="tag"
					className="peer hidden"
					onChange={handleFilter}
				/>
				<label
					htmlFor="pro"
					className=" border border-gray-400 rounded-3xl py-2 px-3 cursor-pointer text-xs peer-checked:bg-metricGreen peer-checked:text-white peer-checked:border-none peer-checked:font-bold transition-all duration-150"
				>
					حرفه ای
				</label>
			</div>
		</div>
	);
};

export default TagFilter;
