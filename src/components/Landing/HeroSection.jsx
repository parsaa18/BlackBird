import SearchIcon from "../../assets/Icons/search-normal.svg";
import MagneticButton from "../common/magneticButton";
import Arrow from "../../assets/Icons/arrow-right.svg";
import { motion } from "framer-motion";
import Section1 from "../../assets/image/Landing/3d-casual-life-young-man-with-tablet-celebrating-success.png";
import { Link, useNavigate } from "react-router-dom";
import Section2 from "../../assets/image/Landing/3d-casual-life-young-man-holding-laptop-and-pointing-up.png";
import Shape from "../../assets/image/Landing/forms-blue-curved-shape-5.png";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { LandingReportApi } from "../../core/services/api/Landing";

const HeroSection = () => {
  const [countStudent, setCountStudent] = useState([]);

  const callAPi = async () => {
    const res = await LandingReportApi();
    setCountStudent(res);
  };

  const navigate = useNavigate();

  const postSearchCourse = async (value) => {
    if (value.selectedQuery === "course") {
      navigate(`/CoursesList?Query=${value.query}`)
    } else if (value.selectedQuery === "news") {
      navigate(`/ArticlesList?Query=${value.query}`)
    }
  };

  useEffect(() => {
    callAPi();
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full md:h-[90vh] h-[280vh] px-[30px]"
    >
      <div className="topSection pt-6 ">
        <div className="title&about w-full flex flex-col md:flex-row">
          <h1 className="font-bold text-metricBlack xl:text-5xl text-4xl pt-10 sm:pt-4   leading-snug">
            آموزش پیشرفته ،
            <br />
            تغییری عمیق
          </h1>
          <div className=" xl:pr-24 md:pr-6 sm:pr-4 pr-2 xl:mr-16 md:mr-8 pt-5 flex flex-col sm:flex-row ">
            <p className="xl:w-80 md:w-60 w-52 text-metricBlack text-justify xl:text-[14px] text-[12px] ">
              اکادمی آنلاین، به عنوان یک مرکز آموزشی پیشرفته و جامع، دوره هایی
              برگزار می‌کند که به شرکت‌کنندگان امکان می‌دهد تا به دانش و
              مهارت‌های خود افزوده کنند و به سطح بالاتری از توانایی و تخصص دست
              یابند.
            </p>
            <div className="z-0 mr-8 mt-3 flex items-center gap-4 h-16 ">
              <Link to="/CoursesList?PageNumber=1">
                <MagneticButton width="48px" height="48px">
                  <img src={Arrow} className="w-6" alt="#" />
                </MagneticButton>
              </Link>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "9vw", opacity: 1 }}
                transition={{
                  ease: [0.87, 0, 0.13, 1],
                  duration: 2,
                  delay: 4.5,
                }}
                className="w-[9vw] h-8 border-2 border-metricGray2 rounded-full overflow-hidden pt-1"
              >
                <motion.div
                  className="w-full flex items-center gap-2 text-metricBlack "
                  initial={{ x: 0 }}
                  animate={{ x: "+119%" }}
                  transition={{ ease: "linear", repeat: Infinity, duration: 4 }}
                >
                  <h1 className="text-[1vw]">همین</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> حالا</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> شروع</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> کنید!</h1>
                  <div className="bg-metricGray2 rounded-full p-1"></div>
                  <h1 className="text-[1vw]">همین</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> حالا</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> شروع</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> کنید!</h1>
                  <div className="bg-metricGray2 rounded-full p-1"></div>
                  <h1 className="text-[1vw]">همین</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> حالا</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> شروع</h1>
                  <h1 className="text-[1vw] mr-[-5px]"> کنید!</h1>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="search&req w-150 pt-10 flex md:flex-row flex-col lg:gap-6 gap-3 ">
        <div className=" req-r h-[300px]  md:w-1/3 rounded-[32px] bg-metricYellow1 p-6 flex flex-col gap-3">
          <h3 className="font-bold text-[16px] lg:text-[20px] flex flex-col gap-2 ">
            باما چه تجربه هایی بدست آوردید؟
            <div className="bg-metricPurple w-24 text-center p-1 rounded-full">
              <h4 className="lg:text-sm text-[13px] text-metricBlack ">نظرات شما</h4>
            </div>
          </h3>
          <div className="w-full flex justify-around gap-1  items-center">
            <div className="w-full border-metricGray2 bg-metricWhite text-metricBlack h-36 rounded-2xl flex flex-col gap-8 justify-center p-4">
              <div>
                <p className="text-[13px] font-bold">
                  بدست آوردن مهارت هایی که تاحالا فکر میکردم استعدادی ندارم
                  &#128517;
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 overflow-hidden  flex items-center justify-center rounded-full">
                  <img src="/src/assets/image/Image(2).jpg" />
                </div>
                <div className="flex flex-col gap-2 ">
                  <h3 className="leading-none text-sm font-bold ">
                    پریسا زارعی
                  </h3>
                  <p className="leading-none text-xs text-metricGray3">دانشجو</p>
                </div>
              </div>
            </div>
            <img src={Section1} className="w-32 hidden xl:flex"/>
          </div>
        </div>
        <div className=" req-c bg-[#AA69FF] h-[300px] md:w-1/3  rounded-[32px] overflow-hidden relative">
          <video
            src="/src/assets/video/School_of_Code_Bootcamp_Teaser_td09Vy_j5hc_137.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
            className="min-w-full min-h-full scale-y-[1.7] scale-x-[1.3]"
          ></video>
        </div>
        <div className="searchreq h-[300px] flex flex-col gap-6 md:w-1/3 rounded-[32px] ">
          <Formik
            initialValues={{ query: "", selectedQuery: "course" }}
            onSubmit={postSearchCourse}
          >
            <Form>
              <div className="search flex items-center justify-around  border-2 border-metricGray2 h-[80px] rounded-full pt-1 pb-1">
                <Field
                  type="text"
                  name="query"
                  className="sm:w-48 w-36  h-full text-sm rounded-full outline-none bg-metricWhite  p-5"
                  placeholder="جست و جو کنید ..."
                />
                <div className="w-32 h-10 flex justify-center items-center">
                  <Field
                    as="select"
                    name="selectedQuery"
                    className="w-3/4 h-7 bg-metricWhite px-2 outline-none rounded-md border-2 border-metricGray2 text-sm text-metricGray3"
                  >
                    <option value="course" selected>
                      دوره
                    </option>
                    <option value="news"> اخبار</option>
                  </Field>
                </div>
                <button type="submit" className="ml-2">
                  <MagneticButton
                    width="100px"
                    height="70px"
                    className="rounded-full flex justify-center items-center"
                  >
                    <img className="w-8" src={SearchIcon} alt="#" />
                  </MagneticButton>
                </button>
              </div>
            </Form>
          </Formik>

          <div className="req bg-metricAqua h-[200px] flex justify-around rounded-[32px]">
            <div className="Info w-[240px]  flex flex-col gap-6 justify-center ">
              <div className="online   flex justify-center flex-col items-center">
                <h2 className="font-bold text-4xl">
                  {countStudent.studentCount} +
                </h2>
                <h4 className="font-semibold text-sm">
                  دانشجو آنلاین در دوره ها
                </h4>
              </div>
              <div className="online   flex justify-center flex-col items-center">
                <h2 className="font-bold text-4xl">
                  {countStudent.teacherCount} +
                </h2>
                <h4 className="font-semibold text-sm">اساتید از سراسر دنیا</h4>
              </div>
            </div>

            <div className="Img  flex flex-col ml-3 ">
              <img src={Shape} className="w-28 mt-2" />
              <img src={Section2} className="w-28 mt-[-10px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
