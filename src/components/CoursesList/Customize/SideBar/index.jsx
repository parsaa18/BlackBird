import { useEffect, useState } from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import SearchBar from "./Search";
import MagneticButton from "../../../common/magneticButton";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../../common/Modal";
import { AnimatePresence, motion } from "framer-motion";
const SideBar = ({
	changeFlager,
	courseLevels,
	courseTypes,
	courseTechnologies,
	courseTeachers,
	coursePagination,
	DeleteFilter,
}) => {
	const [accordion, setAccordion] = useState(0);
	const [RowsOfPage, setRowsOfPage] = useState(9);
	const [SortType, setSortType] = useState([]);
	const [SortingCol, setSortingCol] = useState([]);
	const [Query, setQuery] = useState([]);
	const [CostDown, setCostDown] = useState([]);
	const [CostUp, setCostUp] = useState([]);
	const [ListTech, setListTech] = useState([]);
	const [TechCount, setTechCount] = useState();
	const [courseLevelId, setCourseLevelId] = useState([]);
	const [CourseTypeId, setCourseTypeId] = useState([]);
	const [TeacherId, setTeacherId] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (ListTech.length >= 0) {
			setTechCount(ListTech.length);
		}
	}, [ListTech]);
	const handleDeleteFilter = () => {
		DeleteFilter();
		navigate("/CoursesList?PageNumber=1");
	};

	return (
		<>
			<div className="w-full p-4 max-w-[260px] bg-metricGray rounded-3xl h-full sticky top-10  py-3 hidden lg:flex flex-col gap-2">
				<SearchBar setQuery={setQuery} />
				<Filter
					open={accordion}
					setOpen={setAccordion}
					setCostDown={setCostDown}
					setCostUp={setCostUp}
					courseTechnologies={courseTechnologies}
					courseLevels={courseLevels}
					courseTypes={courseTypes}
					courseTeachers={courseTeachers}
					setListTech={setListTech}
					ListTech={ListTech}
					setCourseTypeId={setCourseTypeId}
					setCourseLevelId={setCourseLevelId}
					setTeacherId={setTeacherId}
				/>
				<div className="flex gap-2">
					<Link
						to={`${coursePagination >= 1 ? `?PageNumber=1` : ""}${
							SortingCol.length !== 0 ? `&SortingCol=${SortingCol}` : ""
						}${SortType.length !== 0 ? `&SortType=${SortType}` : ""}${
							Query.length !== 0 ? `&Query=${Query}` : ""
						}${CostDown.length !== 0 ? `&CostDown=${CostDown}` : ""}${
							CostUp.length !== 0 ? `&CostUp=${CostUp}` : ""
						}${TechCount !== 0 ? `&TechCount=${TechCount}` : ""}${
							ListTech.length !== 0 ? `&ListTech=${ListTech}` : ""
						}${
							courseLevelId.length !== 0
								? `&courseLevelId=${courseLevelId}`
								: ""
						}${
							CourseTypeId.length !== 0 ? `&CourseTypeId=${CourseTypeId}` : ""
						}${TeacherId.length !== 0 ? `&TeacherId=${TeacherId}` : ""}`}
						className="flex items-center justify-center"
					>
						<div onClick={() => changeFlager()}>
							<MagneticButton width="120px" height="40px">
								<h2 className="text-sm text-white">اعمال فیلتر</h2>
							</MagneticButton>
						</div>
					</Link>
					<div onClick={() => handleDeleteFilter()}>
						<MagneticButton bg="242, 242, 242" width="100px" height="40px">
							<h2 className="text-sm text-metricBlack hover:text-white duration-700">
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
			<AnimatePresence mode="wait">
				{modalIsOpen && (
					<div className="fixed top-0 left-0 flex items-center justify-center z-40 p-10">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							className="w-full p-4   bg-metricGray rounded-3xl h-full   py-3 flex flex-col gap-2"
						>
							<div
								onClick={() => {
									setModalIsOpen(false);
								}}
								className="bg-metricGray4 text-metricBlack cursor-pointer flex rounded-full w-10 p-10 py-2 items-center justify-center"
							>
								بستن
							</div>
							<SearchBar setQuery={setQuery} />
							<Filter
								open={accordion}
								setOpen={setAccordion}
								setCostDown={setCostDown}
								setCostUp={setCostUp}
								courseTechnologies={courseTechnologies}
								courseLevels={courseLevels}
								courseTypes={courseTypes}
								courseTeachers={courseTeachers}
								setListTech={setListTech}
								ListTech={ListTech}
								setCourseTypeId={setCourseTypeId}
								setCourseLevelId={setCourseLevelId}
								setTeacherId={setTeacherId}
							/>
							<Sort
								open={accordion}
								setOpen={setAccordion}
								setSortingCol={setSortingCol}
								setSortType={setSortType}
							/>

							<Link
								to={`${coursePagination >= 1 ? `?PageNumber=1` : ""}${
									SortingCol !== 0 ? `&SortingCol=${SortingCol}` : ""
								}${SortType !== 0 ? `&SortType=${SortType}` : ""}${
									Query.length !== 0 ? `&Query=${Query}` : ""
								}${CostDown.length !== 0 ? `&CostDown=${CostDown}` : ""}${
									CostUp.length !== 0 ? `&CostUp=${CostUp}` : ""
								}${TechCount !== 0 ? `&TechCount=${TechCount}` : ""}${
									ListTech.length !== 0 ? `&ListTech=${ListTech}` : ""
								}${
									courseLevelId.length !== 0
										? `&courseLevelId=${courseLevelId}`
										: ""
								}${
									CourseTypeId.length !== 0
										? `&CourseTypeId=${CourseTypeId}`
										: ""
								}${TeacherId.length !== 0 ? `&TeacherId=${TeacherId}` : ""}`}
								className="flex items-center justify-center"
							>
								<div onClick={() => changeFlager()}>
									<MagneticButton width="200px" height="40px">
										اعمال فیلتر
									</MagneticButton>
								</div>
							</Link>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
};

export default SideBar;
