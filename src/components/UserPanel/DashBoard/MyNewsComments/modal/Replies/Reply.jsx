import { dateModifier } from "../../../../../../core/utils/dateModifier";

const Reply = ({ reply }) => {
	console.log(reply);
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col gap-5">
				<div className="flex items-center justify-between gap-3">
					<p className="text-metricGray3 text-xs  font-medium">
						{reply.author}
					</p>
					<span className="w-[7px] h-[7px] bg-metricGray3 rounded-full"></span>
					<p className="text-metricGray3 text-xs ">
						{dateModifier(reply.insertDate)}
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className=" leading-none font-semibold">{reply.title}</h3>
					<p className="text-xs font-normal">{reply.describe}</p>
				</div>
			</div>
		</div>
	);
};

export default Reply;
