import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlineImageNotSupported } from "react-icons/md";
const CardImg = ({ image }) => {
  return (
    <div className="h-1/2  flex items-center rounded-3xl  justify-center w-full bg-metricOrange">
      {image ? (
        <img src={image} className="w-full h-full rounded-3xl " />
      ) : (
        <div className="flex flex-col items-center justify-center text-metricBlack gap-3 font-bold ">
          <MdOutlineImageNotSupported className="text-7xl " />
          عکس از خبر موجود نیست
        </div>
      )}
    </div>
  );
};
export default CardImg;
