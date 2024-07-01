import "./scroller.css";
import FavArticleList from "./FavArticleList/FavArticleList";
import MyReservedList from "./MyReservedCourseList.jsx/MyReservedList";
import FavCourseList from "./FavCourseList/FavCourseList";
import MyCourseList from "./MyCourseList/MyCourseList";
const MyListTable = ({ list, page }) => {
	return (
		<div className="flex flex-col gap-5 w-full ">
			{page === 4 ? (
				<div className="hidden md:grid grid-cols-4  gap-5 w-full px-4 pl-20">
					<div className="w-38"></div>
					<div className=" text-gray-500 w-full flex items-center justify-center ">
						عنوان
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						تاریخ
					</div>
				</div>
			) : page === 1 ? (
				<div className="hidden md:grid grid-cols-6 gap-0 lg:gap-5 w-full lg:pl-10">
					<div className=""></div>
					<div className=" text-gray-500 w-full flex items-center justify-center ">
						نام دوره
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						تاریخ
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						وضعیت
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						برگذاری
					</div>
				</div>
			) : page === 2 ? (
				<div className="hidden md:grid grid-cols-6 gap-5 w-full pl-10">
					<div className=""></div>
					<div className=" text-gray-500 w-full flex items-center justify-center ">
						نام دوره
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						وضعیت
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						تاریخ رزرو
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						قیمت
					</div>
				</div>
			) : (
				<div className="hidden md:grid grid-cols-6 gap-5 w-full pl-10">
					<div className=""></div>
					<div className=" text-gray-500 w-full flex items-center justify-center ">
						نام دوره
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						نام استاد
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						تاریخ
					</div>
					<div className=" text-gray-500 w-full flex items-center justify-center">
						برگذاری
					</div>
				</div>
			)}
			{page === 4 ? (
				<FavArticleList list={list} />
			) : page === 3 ? (
				<FavCourseList list={list} />
			) : page === 2 ? (
				<MyReservedList list={list} />
			) : (
				<MyCourseList list={list} />
			)}
		</div>
	);
};
export default MyListTable;
