import book from "../../../assets/Icons/CourseDetails/book.svg";

const MiniInfo = () => {
	return (
		<div className="p md:mt-20 ">
			<div className="p-5 bg-metricAqua w-96 h-64 rounded-3xl justify-between flex flex-col gap-3">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center font-medium text-metricBlack text-sm">
						<img src={book} className="w-6" />
						تعداد درخواست شغلی در جابینجا
					</div>
					<div>
						<h2 className="pl-2 font-medium">1,200</h2>
					</div>
				</div>
				<div className="border-t border-metricGray3"></div>

				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center font-medium text-metricBlack text-sm">
						<img src={book} className="w-6" />
						تعداد درخواست های شغلی در جاب ویژن
					</div>
					<div>
						<h2 className="pl-2">520</h2>
					</div>
				</div>
				<div className="border-t border-metricGray3"></div>

				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center font-medium text-metricBlack text-sm">
						<img src={book} className="w-6" />
						تعداد درخواست های شغلی در ایران تلنت
					</div>
					<div>
						<h2 className="pl-2">500</h2>
					</div>
				</div>
				<div className="border-t border-metricGray3"></div>

				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center font-medium text-metricBlack text-sm">
						<img src={book} className="w-6" />
						تعداد پروژه ها در کارلنسر
					</div>
					<div>
						<h2 className="pl-2">676</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MiniInfo;
