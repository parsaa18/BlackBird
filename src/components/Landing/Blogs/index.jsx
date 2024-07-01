import MagneticButton from "../../common/magneticButton";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { NewsTopAPI } from "../../../core/services/api/Landing";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Modal from "../../common/Cursor/Modal";

const Blogs = () => {
  const [newsTopList, setNewsTopList] = useState([]);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const CallApi = async () => {
    const res = await NewsTopAPI();
    setNewsTopList(res.news);
  };

  useEffect(() => {
    CallApi();
  }, []);

  return (
    <div className="py-10 px-[30px] ">
      <h2 className="text-3xl font-bold py-5 text-metricBlack text-center">برترین بلاگ های هفته</h2>
      <div className="grid lg:grid-cols-2 gap-20 min-h-screen px-10 lg:px-0 py-10">
        {newsTopList.map((e, i) => {
          return (
            <>
              <Link to={`/ArticleDetails/${e.title}/${e.id}`}>
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
        <Link to="/ArticlesList">
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
export default Blogs;
