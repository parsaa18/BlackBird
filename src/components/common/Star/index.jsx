import { Rating } from "@material-tailwind/react";
import { RateCourseAPI } from "../../../core/services/api/CourseDetails";

const Rate = ({ value, changeFlagHandle, id }) => {
  const CallApi2 = async (value) => {
    await RateCourseAPI(id, value);
    changeFlagHandle();
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-2 font-bold">
          <img src="/src/assets/image/star.png" className="w-7 h-7" />
          امتیاز بدید:
          {value >= 0 && (
            <Rating
              value={value}
              unratedColor="amber"
              onChange={(e) => CallApi2(e)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Rate;
