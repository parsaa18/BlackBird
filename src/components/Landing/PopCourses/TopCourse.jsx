import MagneticButton from "../../common/magneticButton";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { CourseTopAPI } from "../../../core/services/api/Landing";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Modal from "../../common/Cursor/Modal";

const TopCourse = () => {
  const [courseTopList, setCourseTopList] = useState([]);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const CallApi = async () => {
    const res = await CourseTopAPI();
    setCourseTopList(res);
  };

  useEffect(() => {
    CallApi();
  }, []);

  return (
    <div className="py-10 px-[30px] ">
      <h2 className="md:text-3xl text-2xl font-bold text-center py-5">
        محبوب ترین دوره های هفته
      </h2>

      <div className="grid lg:grid-cols-2 gap-14 min-h-screen px-10 lg:px-0 py-10">
        {courseTopList.map((e, i) => {
          return (
            <>
              <Link to={`/CourseDetails/${e.title}/${e.courseId}`}>
                <Cards key={i} index={i} setModal={setModal} data={e} />
              </Link>
            </>
          );
        })}
      </div>
      <div
        data-scroll
        data-scroll-speed="0.07"
        className="flex items-center justify-center"
      >
        <Link to="/CoursesList?PageNumber=1">
          <MagneticButton width="160px" height="50px">
            <div className="flex items-center  px-[10px] w-[160px] h-[50px] group">
              <div className="ml-2 w-8 h-8 flex items-center justify-center">
                <div className=" text-xl text-[#1C1D20]  bg-white rounded-full w-2 h-2 flex items-center justify-center group-hover:w-8 group-hover:h-8 transition-all duration-300">
                  <GoArrowUpRight className="opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              مشاهده بیشتر
            </div>
          </MagneticButton>
        </Link>
      </div>
      <Modal modal={modal} />
    </div>
  );
};
export default TopCourse;
