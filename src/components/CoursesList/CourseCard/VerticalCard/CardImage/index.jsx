import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlineImageNotSupported } from "react-icons/md";
const CardImg = ({ image }) => {
  return (
    <div className="h-1/2  flex items-center justify-center w-full bg-metricOrange overflow-hidden rounded-2xl">
      {image ? (
        <img src={image} className="h-full w-full" />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3  font-semibold text-metricBlack">
          <MdOutlineImageNotSupported className="text-7xl" />
          عکس از دوره موجود نیست
        </div>
      )}
    </div>
  );
};
export default CardImg;
