import { useParams } from "react-router-dom";
import Rate from "../../common/Star";
import Markdown from "react-markdown";

const Disc = ({ disc, rate, changeFlagHandle }) => {
  const params = useParams();

  return (
    <div className="md:w-3/5 py-7  flex flex-col gap-4 ">
      <div className="tag border border-metricGray3 w-20 rounded-full h-7 flex justify-center items-center text-[12px]">
        توضیحات
      </div>
      <div className="text-justify">
        <Markdown className={"prose"}>{disc}</Markdown>
      </div>
      <Rate value={rate} changeFlagHandle={changeFlagHandle} id={params.id} />
    </div>
  );
};

export default Disc;
