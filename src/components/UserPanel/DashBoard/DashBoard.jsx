import ProfileCompletion from "./ProfileCompletion/ProfileCompletion";
import MyCourseComments from "./MyCourseComments/MyCourseComments";
import MyNewsComments from "./MyNewsComments/MyNewsComments";

const DashBoard = () => {
	return (
		<>
			<div className="flex lg:flex-row gap-3  flex-col items-center lg:h-[270px] justify-center xl:gap-5">
				<div className="w-full h-full bg-metricGray rounded-3xl">
					<MyCourseComments />
				</div>
				<div className="w-full h-full bg-metricGray rounded-3xl">
					<MyNewsComments />
				</div>
				<div className="lg:w-2/3 w-full h-full bg-metricGray2 rounded-3xl">
					<ProfileCompletion />
				</div>
			</div>
		</>
	);
};

export default DashBoard;
