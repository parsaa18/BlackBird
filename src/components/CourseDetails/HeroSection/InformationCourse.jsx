import book from "../../../assets/Icons/CourseDetails/book.svg";
import date from "../../../assets/Icons/CourseDetails/calendar-tick.svg";
import registers from "../../../assets/Icons/CourseDetails/profile-2user.svg";
import timer from "../../../assets/Icons/CourseList/timer.svg";
import prices from "../../../assets/Icons/CourseList/coin.svg";
import MagneticButton from "../../common/magneticButton";
import { ReserveCourseAPI } from "../../../core/services/api/CourseDetails";
import { useParams } from "react-router-dom";
import Modal from "../../common/Modal";
import { useState } from "react";
import toast from "react-hot-toast";

const InformationCourse = ({ dateStart, capacity, registed, price , openModal }) => {
  const params = useParams();

  const reserveCourse = async () => {
    const obj = { courseId: params.id };
    const result = await ReserveCourseAPI(obj);
    if (result.success) {
      openModal();
    } else {
      toast.error(result.message);
    }
    console.log("added to reserve course");
  };



  return (
    <>
      <div className="bg-metricGray/50 rounded-3xl h-full w-full p-4 flex flex-col gap-5">
        <div className="tag border border-metricGray3 w-[88px] rounded-full h-7 flex justify-center items-center text-[12px]">
          جزئیات دوره
        </div>
        <div className="info flex flex-col gap-3 font-medium">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center text-metricGray3 text-sm">
              <img src={book} className="w-6" />
              تعداد فصل ها
            </div>
            <div>
              <h2 className="pl-2">6</h2>
            </div>
          </div>
          <div className="border-t border-metricGray3"></div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center text-metricGray3 text-sm">
              <img src={timer} className="w-6" />
              زمان دوره <span className="text-xs pt-1 mr-[-4px]">(ساعت)</span>
            </div>
            <div>
              <h2 className="pl-2">24</h2>
            </div>
          </div>
          <div className="border-t border-metricGray3"></div>

          <div className="flex justify-between items-center">
            <div
              className="flex gap-2 items-center text-metricGray3 text-sm"
            >
              <img src={registers} className="w-6" />
              تعداد دانشجو
            </div>
            <div>
              <h2 className="pl-2">
                {registed} / {capacity}
              </h2>
            </div>
          </div>
          <div className="border-t border-metricGray3"></div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center text-metricGray3 text-sm">
              <img src={date} className="w-6" />
              زمان شروع دوره
            </div>
            <div>
              <h2 className="pl-2">{dateStart}</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="flex gap-1 items-center text-metricBlack font-bold mr-[-2px]">
            <img src={prices} className="w-7" />
            قیمت ثبت نام دوره
          </div>
          <div className="flex font-medium">
            <h2 className="pl-2 font-semibold text-xl">
              {price?.toLocaleString()}
            </h2>
            تومان
          </div>
        </div>
        <div onClick={() => reserveCourse()}>
          <MagneticButton width="100%" height="46px">
            رزرو دوره
          </MagneticButton>
        </div>

      </div>
      
    </>
  );
};

export default InformationCourse;
