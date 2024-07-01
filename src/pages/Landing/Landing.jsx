import { useEffect } from "react";
import { LandingPage } from "../../components/Landing/LandingPage";
import LocomotiveScroll from "locomotive-scroll";


const Landing = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])
  


  return (
    <>
      <div className="w-full ">
        <LandingPage />
      </div>
    </>
  );
};

export default Landing;
