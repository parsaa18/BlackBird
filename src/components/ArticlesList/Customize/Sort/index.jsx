import { Link } from "react-router-dom";
import MagneticButton from "../../../common/magneticButton";
import { useState } from "react";

const So = ({ changeFlager }) => {

  const [SortingCol, setSortingCol] = useState([]);
  const [SortType, setSortType] = useState([]);

  const handleCostDown = () => {
    setSortingCol("currentView");
    setSortType("ACS");
  };
  const handleNewest = () => {
    setSortingCol("insertDate");
    setSortType("DESC");
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="text-base text-metricGray3">ترتیب</h2>
        <div className="flex gap-4 text-metricBlack">
          <div className="flex">
            <input
              type="radio"
              id="popular"
              name="sort"
              onChange={handleCostDown}
              className="peer hidden"
            />
            <label
              htmlFor="popular"
              className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150"
            >
              پربازدید ترین
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              id="cheap"
              name="sort"
              className="peer hidden"
              onChange={handleNewest}
            />
            <label
              htmlFor="cheap"
              className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150"
            >
              جدیدترین
            </label>
          </div>
          <Link
            to={`?PageNumber=1${SortingCol !== 0 ? `&SortingCol=${SortingCol}` : ""}${
              SortType !== 0 ? `&SortType=${SortType}` : ""
            }`}
          >
            <div onClick={() => changeFlager()}>
              <MagneticButton width="100px" height="40px">
                اعمال
              </MagneticButton>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default So;
