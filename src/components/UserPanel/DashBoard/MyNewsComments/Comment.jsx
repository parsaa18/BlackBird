import { useSelector } from "react-redux";
import { dateModifier } from "../../../../core/utils/dateModifier";

const Comment = ({ comment }) => {
	const { profile } = useSelector((s) => s.profile);
	return (
		<div className="flex gap-2 ">
			<div className="h-full min-h-16 rounded-full w-1 bg-metricYellow1"></div>
			<div className="flex flex-col gap-3 lg:gap-5">
				<div className="flex items-center justify-between gap-3">
					<p className="text-metricGray3 text-xs  font-medium">
						{profile.fName + " " + profile.lName} (شما)
					</p>
					<span className="w-[7px] h-[7px] bg-metricGray3/30 rounded-full"></span>
					<p className="text-metricGray3 text-xs ">
						{dateModifier(comment.insertDate)}
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text- leading-none font-semibold">{comment.title}</h3>
					<p className="text-xs font-normal">{comment.describe}</p>
				</div>
			</div>
		</div>
	);
};

export default Comment;
