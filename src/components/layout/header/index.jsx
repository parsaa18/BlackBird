import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

import MetricLogo from "../../../assets/logo";
import Reveal from "../../common/reveal";
import { json, Link } from "react-router-dom";
import Magnetic from "../../common/magnetic";
import UserNav from "./UserNav/UserNav";
import { useEffect, useState } from "react";
import sun from "../../../assets/Icons/darkNLight/sun.svg";
import moon from "../../../assets/Icons/darkNLight/moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../../core/provider/darkMode";
import NavbarComponent from "./Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [NavBar, setNavBar] = useState(false);
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => {
    return state.darkMode;
  });
  const handleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    dispatch(setDarkMode(!darkMode));
  };
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Reveal del={0.2} dur={0.5} dir={-20}>
      <header
        className={`flex w-full bg-metricWhite  z-10 p-6  items-center  justify-between max-w-[1400px]  `}
      >
        <div className="hidden md:flex items-center gap-3">
          <UserNav />
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
        <div className="flex md:hidden items-center">
          <NavbarComponent header={true} />
        </div>
        <ul className="list-none hidden  md:flex items-center gap-14 font-Iransans text-metricBlack font-semibold">
          <Magnetic>
            <li className="cursor-pointer">
              <Link to="/"> خانه</Link>
            </li>
          </Magnetic>
          <Magnetic>
            <li className="cursor-pointer">
              <Link to="/CoursesList?PageNumber=1"> دوره ها</Link>
            </li>
          </Magnetic>

          <Magnetic>
            <li className="cursor-pointer">
              <Link to={"/ArticlesList?PageNumber=1"}>بلاگ ها</Link>
            </li>
          </Magnetic>
        </ul>
        <Link to="/">
          <div className="w-32 cursor-pointer  ">
            <MetricLogo color={`${darkMode ? "#cacaca" : "#313131"}`} />
          </div>
        </Link>
      </header>
      <AnimatePresence mode="wait">
        {NavBar && <NavbarComponent />}
      </AnimatePresence>
    </Reveal>
  );
};

export default Header;
