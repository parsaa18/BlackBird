import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setDarkMode } from "../../../core/provider/darkMode";
import Magnetic from "../../common/magnetic";
import sun from "../../../assets/Icons/darkNLight/sun.svg";
import moon from "../../../assets/Icons/darkNLight/moon.svg";
import { MdOutlineManageAccounts } from "react-icons/md";
const Header = ({ setAccountModal }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => {
    return state.darkMode;
  });
  const handleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    dispatch(setDarkMode(!darkMode));
  };
  return (
    <div className="fixed w-full h-14 bg-metricWhite shadow-2xl shadow-metricGray3/10  z-30 sm:pr-32 md:pr-60 px-5 sm:px-10 flex items-center justify-between ">
      <div>
        <ul className="flex items-center gap-5 lg:gap-10 justify-start text-sm md:text-base  w-full">
          <Link to={"/"}>
            <li className=" py-2 text-metricGray3">صفحه اصلی</li>
          </Link>
          <Link to={"./Reports"}>
            <li className=" py-2 text-metricGray3">گزارش</li>
          </Link>
          <li className=" py-2 text-metricGray3">ارتباط با ما</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Magnetic>
          <div
            className="text-xl p-3 rounded-full bg-metricGray cursor-pointer"
            onClick={() => {
              setAccountModal(true);
            }}
          >
            <MdOutlineManageAccounts className="text-2xl text-metricGray3" />
          </div>
        </Magnetic>
        <Magnetic>
          <div
            className="text-xl p-3 rounded-full bg-metricGray cursor-pointer"
            onClick={() => {
              handleDarkMode();
            }}
          >
            {darkMode ? (
              <img src={sun} className="w-5" />
            ) : (
              <img src={moon} className="w-5" />
            )}
          </div>
        </Magnetic>
      </div>
    </div>
  );
};
export default Header;
