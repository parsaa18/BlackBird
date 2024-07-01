import Tag from "../../common/Tag";
import Like from "../../../assets/Icons/Landing/like.svg";
import DisLike from "../../../assets/Icons/Landing/dislike.svg";

const Cards = ({ data , setModal , index }) => {
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
        <Tag name={data.levelName} padding={"5px 15px"} />
      </div>
      <div className="info  flex justify-between">
        <h2 className="title font-bold text-xl text-metricBlack ">{data.title}</h2>
        <div className="View w-28 flex justify-between text-metricBlack ">
          <div className="flex justify-around w-12 items-center mb-[1px]">
            <img src={Like} />
            {data.likeCount}
          </div>
          <div className="flex justify-around w-12 items-center">
            <img src={DisLike} />
            {data.dissLikeCount}
          </div>
        </div>
      </div>
      <div className="disc text-metricGray3">
        <p>{data.describe}</p>
      </div>
      <div className="img overflow-hidden w-full h-full flex items-center justify-center rounded-2xl ">
        <img src={data.tumbImageAddress} className=" w-full  " />
      </div>
    </div>
  );
};

export default Cards;
