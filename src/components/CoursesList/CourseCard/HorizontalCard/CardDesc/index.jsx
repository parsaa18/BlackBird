import Tag from "../../../../common/Tag";

const CardDesc = ({
	title,
	likes,
	disLikes,
	tag,
	teacher,
	duration,
	students,
	price,
	date,
}) => {
	return (
		<div className="pl-4 py-4 pr-2 flex flex-col justify-between w-3/5 h-full">
			<h2 className="text-base md:text-xl md:w-48 w-32 font-semibold truncate">
				{title}
			</h2>
			<div className="flex items-center gap-2 flex-wrap">
				{tag.map((e, i) => {
					return <Tag key={i} name={e} padding={" 5px 10px"} fontSize="10px" />;
				})}
			</div>
			<div className="flex justify-between text-metricBlack truncate items-end">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2 md:text-sm text-xs font-semibold">
						<img src="/src/assets/image/teacher.png" className="w-5 h-5" />
						{teacher}
					</div>
					<div className="md:text-sm text-xs font-semibold flex items-center gap-2">
						<img src="/src/assets/image/timer2.png" className="w-5 h-5" />

						{duration}
					</div>
					<div className="flex items-center gap-2 md:text-sm text-xs font-semibold">
						<img
							src="/src/assets/image/profile-2user2.png"
							className="w-5 h-5"
						/>
						{students}
					</div>
				</div>
				<div className="flex gap-5">
					<div className="flex items-center gap-1">
						<img src="/src/assets/image/dislike.png" className="w-5 h-5" />
						{disLikes}
					</div>
					<div className="flex items-center gap-1">
						<img src="/src/assets/image/like.png" className="w-5 h-5" />
						{likes}
					</div>
				</div>
			</div>
			<div className="text-metricBlack  flex w-full py-2 items-center justify-between border-t border-gray-300">
				<div className="flex gap-1 items-center md:text-base text-xs font-bold">
					<img src="/src/assets/image/coin.png" className="w-6 h-6" />

					{price.toLocaleString() + " تومان"}
				</div>
				<div className="flex gap-2 items-center md:text-sm text-xs">
					<img src="/src/assets/image/calendar-tick.png" className="w-5 h-5" />
					{date}
				</div>
			</div>
		</div>
	);
};
export default CardDesc;
