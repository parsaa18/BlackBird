import { Formik, Form } from "formik";

const TagFilter = ({ developing, noob, pro, handleFilter }) => {
	return (
		<div className="text-[12px] flex flex-wrap gap-1">
			<Formik initialValues={{ Title: "", Describe: "" }}>
				<Form>
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
							className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
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
							className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
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
							className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
						>
							حرفه ای
						</label>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default TagFilter;
