import Disc from "./Disc";
import MiniInfo from "./MiniInfo";
import Video from "./Video";

const DiscCourseDetail = ({ data, changeFlagHandle }) => {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="0.4"
			className="w-full bg-metricGray4 min-h-[90vh] rounded-3xl px-8 pb-8 flex gap-10 flex-col"
		>
			<div className="flex  md:flex-row flex-col md:gap-20 gap-5">
				<Disc
					disc={data.describe}
					rate={data.currentUserRateNumber}
					changeFlagHandle={changeFlagHandle}
				/>
				<MiniInfo />
			</div>
			<Video id={data.courseId} />
		</div>
	);
};

export default DiscCourseDetail;
