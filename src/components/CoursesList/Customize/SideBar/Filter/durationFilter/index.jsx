const DurFilter = ({ Dur5, Dur10, Dur15, Dur20 }) => {
	return (
		<div className="text-[10px] flex flex-wrap gap-2">
			<div className="flex">
				<input
					ref={Dur5}
					type="radio"
					id="Dur5"
					name="duration"
					className="peer hidden"
				/>
				<label
					htmlFor="Dur5"
					className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
				>
					بیشتر از 5 ساعت
				</label>
			</div>
			<div className="flex">
				<input
					ref={Dur10}
					type="radio"
					id="Dur10"
					name="duration"
					className="peer hidden"
				/>
				<label
					htmlFor="Dur10"
					className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricGreen peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
				>
					بیشتر از 10 ساعت
				</label>
			</div>
			<div className="flex">
				<input
					ref={Dur15}
					type="radio"
					id="Dur15"
					name="duration"
					className="peer hidden"
				/>
				<label
					htmlFor="Dur15"
					className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricGreen peer-checked:text-white peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
				>
					بیشتر از 15 ساعت
				</label>
			</div>
			<div className="flex">
				<input
					ref={Dur20}
					type="radio"
					id="Dur20"
					name="duration"
					className="peer hidden"
				/>
				<label
					htmlFor="Dur20"
					className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricGreen peer-checked:text-white peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
				>
					بیشتر از 20 ساعت
				</label>
			</div>
		</div>
	);
};

export default DurFilter;
