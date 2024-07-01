import { useState } from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import SearchBar from "./search";
import { Link, useNavigate } from "react-router-dom";
import MagneticButton from "../../common/magneticButton";
import { AnimatePresence, motion } from "framer-motion";
import { Field, Form, Formik } from "formik";

const SideBar = ({ articlesCategory, changeFlager, DeleteFilter }) => {
	const [accordion, setAccordion] = useState(1);
	const [NewsCategoryId, setNewsCategoryId] = useState([]);
	const [Query, setQuery] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const navigate = useNavigate();
	const handleDeleteFilter = () => {
		DeleteFilter();
		navigate("/ArticlesList?PageNumber=1");
	};
	const flagAndFilter = () => {
		changeFlager();
	};
	const postSearchCourse = async (value) => {
		setNewsCategoryId(value);
	};

	return (
		<>
			<Formik initialValues={{ selectedQuery: "" }}>
				<Form>
					<div className="w-full hidden lg:flex p-4 max-w-[260px] bg-metricGray rounded-3xl h-[800px] sticky top-10  py-5  flex-col gap-4">
						<SearchBar setQuery={setQuery} />
						<div className="flex flex-wrap gap-2 pt-4">
							{/* {articlesCategory.map((item, b) => ( */}
							<div className="flex">
								<div className="w-full h-7 flex justify-center items-center">
									<Field
										as="select"
										name="selectedQuery"
										onChange={(e) => postSearchCourse(e.target.value)}
										className="w-full py-2 bg-metricWhite px-3  outline-none rounded-full border-2 border-metricGray2 text-sm text-metricGray3"
									>
										{articlesCategory.map((item, b) => (
											<option key={b} value={item.id}>
												{item.categoryName}
											</option>
										))}
									</Field>
								</div>
							</div>
						</div>
						<div className="flex gap-2 pt-4">
							<Link
								to={`${
									NewsCategoryId !== 0
										? `?NewsCategoryId=${NewsCategoryId}`
										: ""
								}${Query.length !== 0 ? `&Query=${Query}` : ""}`}
								className="flex items-center justify-center"
							>
								<div onClick={() => flagAndFilter()}>
									<MagneticButton width="120px" height="40px">
										اعمال فیلتر
									</MagneticButton>
								</div>
							</Link>
							<div onClick={() => handleDeleteFilter()} className="">
								<MagneticButton bg="242, 242, 242" width="100px" height="40px">
									<h2 className="text-sm text-metricBlack hover:text-white transition-all duration-700">
										حذف فیلتر
									</h2>
								</MagneticButton>
							</div>
						</div>
					</div>
					<div
						onClick={() => {
							setModalIsOpen(true);
						}}
						className="lg:hidden bg-metricWhite2 text-metricBlack flex w-32 rounded-full items-center justify-center p-2 cursor-pointer"
					>
						فیلتر
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default SideBar;
