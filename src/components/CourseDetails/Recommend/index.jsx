import { useEffect, useState } from "react";
import { CourseTopAPI } from "../../../core/services/api/CourseDetails";
import CardImg from "./CardImage";
import CardDesc from "./CardDesc";
import Arrow from "../../../assets/Icons/CourseList/arrow-right.svg";
import { dateModifier } from "../../../core/utils/dateModifier";
import { Link } from "react-router-dom";

const RecommendedCourse = ({ params, techEx }) => {
	const [recommended, setRecommended] = useState([]);

	const CallApi = async () => {
		const res = await CourseTopAPI();
		setRecommended(res);
	};

	useEffect(() => {
		CallApi();
	}, []);

	return (
		<div className="px-8 py-2">
			<h2 className="text-3xl font-bold py-5 pb-9">دوره های مرتبط</h2>
			<div className="flex flex-col justify-center items-center">
				<div className="w-full lg:w-4/5 min-h-[450px] flex justify-around gap-5 flex-wrap">
					{recommended.map((item, i) => {
						return (
							<>
								<Link to={"/CourseDetails/" + item.courseId}>
									<div
										key={i}
										style={{ direction: "rtl" }}
										className="relative flex flex-col h-[410px] w-[320px]  cursor-pointer bg-metricGray4 rounded-[40px] overflow-hidden "
									>
										<CardImg image={item.tumbImageAddress} />
										<CardDesc
											title={item.title}
											likes={item.likeCount}
											disLikes={item.dissLikeCount}
											tag={item.levelName}
											teacher={item.teacherName}
											duration={"20"}
											students={item.currentRegistrants}
											price={item.cost}
											date={dateModifier(item.lastUpdate)}
										/>
										<div className="p-2 rounded-full bg-white absolute top-4 left-4 shadow-sm shadow-gray-400">
											<img src={Arrow} className="w-5" />
										</div>
									</div>
								</Link>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default RecommendedCourse;
