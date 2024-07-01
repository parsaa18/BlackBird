import { useEffect, useState } from "react";
import PaginationGrid from "../../components/common/PaginationGrid";
import Hero from "../../components/CoursesList/hero";
import Customize from "../../components/CoursesList/Customize/ViewCustomize";
import { SyncLoader } from "react-spinners";
import SideBar from "../../components/CoursesList/Customize/SideBar";
import {
	CourseLevelAPI,
	CourseListAPI,
	CourseTechnologiesAPI,
	CourseTypesAPI,
	CourseTeachersAPI,
} from "../../core/services/api/CourseList";
import LocomotiveScroll from "locomotive-scroll";
import { useSearchParams } from "react-router-dom";

const CoursesList = () => {
	const [loading, setLoading] = useState(false);
	const [vertical, setVertical] = useState(true);
	const [itemsPerPage, setItemsPerPage] = useState(9);
	const [courseList, setCourseList] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [changeFlag, setChangeFlag] = useState(false);
	const [courseLevels, setCourseLevels] = useState([]);
	const [courseTypes, setCourseTypes] = useState([]);
	const [courseTechnologies, setCourseTechnologies] = useState([]);
	const [courseTeachers, setCourseTeachers] = useState([]);
	const [courseTotalCount, setCourseTotalCount] = useState([]);
	const [coursePagination, setCoursePagination] = useState(1);
	const [deleteFilter, setDeleteFilter] = useState(false);


	const PageNumber = searchParams.get("PageNumber");
	const ListTech = searchParams.get("ListTech");
	const courseLevelId = searchParams.get("courseLevelId");
	const CostDown = searchParams.get("CostDown");
	const CostUp = searchParams.get("CostUp");
	const SortingCol = searchParams.get("SortingCol");
	const SortType = searchParams.get("SortType");
	const Query = searchParams.get("Query");
	const TechCount = searchParams.get("TechCount");
	const CourseTypeId = searchParams.get("CourseTypeId");
	const TeacherId = searchParams.get("TeacherId");

	const changeFlager = () => {
		setChangeFlag(!changeFlag);
	};
	
	const DeleteFilter = () => {
		setDeleteFilter(!deleteFilter);
	};

	const CallApi = async () => {
		setLoading(true);
		const res = await CourseListAPI(
			itemsPerPage,
			SortingCol,
			SortType,
			Query,
			CostDown,
			CostUp,
			ListTech,
			TechCount,
			courseLevelId,
			CourseTypeId,
			TeacherId,
			PageNumber
		);
		setCourseList(res.courseFilterDtos);
		setCourseTotalCount(res.totalCount);
		setLoading(false);
		const courseLevel = await CourseLevelAPI();
		setCourseLevels(courseLevel);
		const courseType = await CourseTypesAPI();
		setCourseTypes(courseType);
		const Technologie = await CourseTechnologiesAPI();
		setCourseTechnologies(Technologie);
		const Teacher = await CourseTeachersAPI();
		setCourseTeachers(Teacher);
	};

	useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll();
		CallApi();
	}, [changeFlag , deleteFilter]);

	useEffect(() => {
		if (vertical) {
			setItemsPerPage(9);
		} else {
			setItemsPerPage(10);
		}
	}, [vertical]);

	return (
		<div className=" ">
			<Hero courseTotalCount={courseTotalCount} />
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed="0.25"
				className=" bg-metricGray4 w-full z-50 py-5 rounded-3xl "
			>
				<Customize vertical={vertical} setVertical={setVertical} />
				<div
					className={`py-10 max-w-[1400px] ${
						vertical ? "px-[30px]" : "md:px-[30px] px-0"
					} flex flex-col lg:flex-row gap-5 lg:justify-between justify-center w-full`}
				>
					<SideBar
						list={courseList}
						setList={setCourseList}
						changeFlager={changeFlager}
						courseLevels={courseLevels}
						courseTypes={courseTypes}
						courseTechnologies={courseTechnologies}
						courseTeachers={courseTeachers}
						coursePagination={coursePagination}
						DeleteFilter={DeleteFilter}
					/>
					{loading ? (
						<div className="flex items-center justify-center w-full h-[300px]">
							<SyncLoader color="#444" />
						</div>
					) : (
						<PaginationGrid
							list={courseList}
							itemsPerPage={itemsPerPage}
							vertical={vertical}
							courseTotalCount={courseTotalCount}
							setCoursePagination={setCoursePagination}
							coursePagination={coursePagination}
							changeFlager={changeFlager}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default CoursesList;
