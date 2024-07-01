import { useEffect } from "react"
import CourseDetails from "../../components/CourseDetails"
import LocomotiveScroll from "locomotive-scroll";


const CourseDetailsPage = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();	
  }, [])
  
  return (
    <div>
      <CourseDetails />
    </div>
  )
}

export default CourseDetailsPage