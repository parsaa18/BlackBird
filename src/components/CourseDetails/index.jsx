import DiscCourseDetail from "./DiscSection";
import HeroCourseDetail from "./HeroSection";
import { useState, useEffect } from "react";
import { CourseDetailsAPI } from "../../core/services/api/CourseDetails.js";
import { useParams } from "react-router-dom";
import NestedCommentSystem from "../common/Comment/index.jsx";
import RecommendedCourse from "./Recommend/index.jsx";

const CourseDetails = () => {
  const [courseData, setCourseData] = useState([]);
  const [changeFlag, setChangeFlag] = useState(false);

  const params = useParams();

  const CallApi = async () => {
    const res = await CourseDetailsAPI(params.id);
    setCourseData(res);
  };

  const changeFlagHandle = () => {
    setChangeFlag(!changeFlag);
  };

  useEffect(() => {
    CallApi();
  }, [changeFlag]);

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroCourseDetail
        data={courseData}
        FlagHandler={changeFlagHandle}
        setData={setCourseData}
      />
      <DiscCourseDetail
        data={courseData}
        setData={setCourseData}
        changeFlagHandle={changeFlagHandle}
      />
      <NestedCommentSystem params={params} />
      {courseData && (
        <RecommendedCourse
          params={params}
          techEx={courseData.courseLevelName}
        />
      )}
    </div>
  );
};

export default CourseDetails;
