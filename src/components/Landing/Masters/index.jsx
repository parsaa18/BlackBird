import { TeacherApi } from "../../../core/services/api/Landing";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const Masters = () => {
  const [topTeachers, setTopTeachers] = useState([]);
  const GetTeachersList = async () => {
    const result = await TeacherApi();
    setTopTeachers(result.slice(0,4));
    console.log(result);
  };
  useEffect(() => {
    GetTeachersList();
  }, []);

  return (
    <div className="py-10 md:pb-[900px] pb-[1180px] lg:pb-[600px] xl:pb-0 px-[30px]">
      <h2 className="text-3xl py-12 text-center font-bold text-metricBlack">
        برترین اساتید هفته
      </h2>
      <div className="w-full h-[400px] grid xl:grid-cols-4 gap-10 ">
        {topTeachers.map((e, i) => {
          return (
            <>
              <Cards  key={i} index={i+1} data={e} />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Masters;
