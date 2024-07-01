import { useEffect, useState } from "react";
import VCard from "../../CoursesList/CourseCard/VerticalCard";
import PaginationBtn from "./paginationButton";
import Reveal from "../reveal";
import HCard from "../../CoursesList/CourseCard/HorizontalCard";
import ArticleCard from "../../ArticlesList/ArticleCard";
import { Link } from "react-router-dom";
import { dateModifier } from "../../../core/utils/dateModifier";
import So from "../../ArticlesList/Customize/Sort";
import SortCourse from "../../CoursesList/Customize/SideBar/Sort";

const PaginationGrid = ({
	list,
	itemsPerPage,
	vertical,
	article,
	courseTotalCount,
	setCoursePagination,
	coursePagination,
	changeFlager,
	setSortingCol,
	setSortType,
}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPage = Math.ceil(courseTotalCount / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const [currentPageData, setCurrentPageData] = useState(
		list.slice(startIndex, endIndex)
	);

	useEffect(() => {
		setCurrentPageData([]);
		setTimeout(() => {
			setCurrentPageData(list.slice(startIndex, endIndex));
		}, 0);
	}, [currentPage, list]);

	useEffect(() => {
		setCurrentPageData([]);
		setTimeout(() => {
			setCurrentPageData(list.slice(startIndex, endIndex));
		}, 0);
		setCurrentPage(1);
	}, [vertical]);

  return (
    <div className="flex flex-col gap-10 w-full">
      {vertical || article ? (
        <>
          {article ? (
            <So changeFlager={changeFlager} />
          ) : (
            <SortCourse changeFlager={changeFlager} />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-2 2xl:grid-cols-3 gap-5 xl:gap-20 xl:px-10 2xl:gap-5 2xl:p-0 ltr min-h-[250px] transition-all duration-100">
            {currentPageData.map((item, index) => {
              return (
                <Reveal key={index} del={index * 0.1} dur={0.2} dir={50}>
                  {article ? (
                    <Link to={"/ArticleDetails/" + item.title + "/" + item.id}>
                      <ArticleCard
                        key={item.id}
                        image={item.currentImageAddressTumb}
                        title={item.title}
                        view={item.currentView}
                        likeCount={item.currentLikeCount}
                        tag={item.newsCatregoryName}
                        date={dateModifier(item.insertDate)}
                        description={item.miniDescribe}
                      />
                    </Link>
                  ) : (
                    <Link
                      to={"/CourseDetails/" + item.title + "/" + item.courseId}
                    >
                      <VCard
                        key={item.courseId}
                        title={item.title}
                        likes={item.likeCount}
                        disLikes={item.dissLikeCount}
                        tag={[item.levelName, item.technologyList]}
                        price={item.cost}
                        teacher={item.teacherName}
                        date={dateModifier(item.lastUpdate)}
                        students={item.currentRegistrants}
                        image={item.tumbImageAddress}
                        duration={2}
                      />
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 ltr min-h-[250px] transition-all duration-100">
          {currentPageData.map((item, index) => {
            return (
              <Reveal key={index} del={index * 0.05} dur={0.25} dir={50}>
                <Link to={"/CourseDetails/" + item.title + "/" + item.courseId}>
                  <HCard
                    key={item.courseId}
                    title={item.title}
                    likes={item.likeCount}
                    disLikes={item.dissLikeCount}
                    tag={[item.levelName, item.technologyList]}
                    price={item.cost}
                    teacher={item.teacherName}
                    date={dateModifier(item.lastUpdate)}
                    students={item.currentRegistrants}
                    image={item.tumbImageAddress}
                    disc={item.describe}
                    duration={2}
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>
      )}

			<PaginationBtn
				totalPage={totalPage}
				setCoursePagination={setCoursePagination}
				current={coursePagination}
				changeFlager={changeFlager}
			/>
		</div>
	);
};

export default PaginationGrid;
