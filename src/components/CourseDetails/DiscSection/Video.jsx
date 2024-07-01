import { useEffect, useState } from "react";
import { getCourseVideoById } from "../../../core/services/api/CourseVideo/courseVideo";

const Video = ({ id }) => {
	const [videoData, setVideoData] = useState();
	const getCourseVideo = async () => {
		const result = await getCourseVideoById(id);
		console.log(result);
		result.success && setVideoData(result.data);
	};
	useEffect(() => {
		getCourseVideo();
	}, [id]);
	console.log(videoData);
	return (
		<>
			{videoData && (
				<div className="w-full  rounded-3xl min-h-[300px] flex flex-col items-start gap-10 text-2xl font-bold justify-center text-metricBlack">
					ویدیوی دوره
					<div className="bg-metricWhite xl:w-[800px]  rounded-3xl">
						<video
							src={videoData.url}
							controls
							className="rounded-3xl w-full"
						></video>
					</div>
				</div>
			)}
		</>
	);
};

export default Video;
