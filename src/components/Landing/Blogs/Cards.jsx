import Tag from "../../common/Tag";
import View from "../../../assets/Icons/Landing/eye.svg";
import Date from "../../../assets/Icons/Landing/calendar-2.svg";

const Cards = ({ data, index, setModal }) => {
  const option = {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  };
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className=" rounded-[32px] h-[500px] flex flex-col gap-4 bg-metricGray p-5 "
    >
      <div className="goto flex ">
        <Tag name={data.newsCatregoryName} padding={"5px 15px"} />
      </div>
      <div className="info  flex justify-between">
        <h2 className="title font-bold text-xl text-metricBlack ">{data.title}</h2>
        <div className="View w-52 flex justify-between text-metricBlack">
          <div className="flex justify-around w-14 items-center">
            <img src={View} />
            {data.currentView}
          </div>
          <div className="flex justify-around w-32 items-center">
            <img src={Date} />5 خرداد 1403
          </div>
        </div>
      </div>
      <div className="disc text-metricGray3">
        <p>{data.miniDescribe}</p>
      </div>
      <div className="img overflow-hidden w-full h-full flex items-center justify-center rounded-2xl ">
        <img src={data.currentImageAddressTumb} className=" w-full  " />
      </div>
    </div>
  );
};

export default Cards;
