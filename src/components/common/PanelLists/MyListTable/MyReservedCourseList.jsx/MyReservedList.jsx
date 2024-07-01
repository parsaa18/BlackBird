import { ClipLoader } from "react-spinners";
import Course from "../Course";
import ReserveCourse from "./ReserveCourse";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyReservedList = ({ list }) => {
	console.log(list);
	return (
		<>
			<Toaster />
			<div
				className={`flex flex-col items-center  divide-y divide-gray-400 overflow-auto ${
					list["totalCount"] === 2 ? "h-[323px]" : "h-[300px]"
				}  scrolldiv`}
			>
				{list?.response?.status == 401 ||
				list?.response?.status == 401 ||
				list?.response?.status == 403 ? (
					<div className="w-full h-full flex flex-col gap-10 items-center justify-center text-5xl font-semibold text-metricBlack">
						دسترسی ندارید
						<p
							className="text-7xl font-bold "
							style={{ fontFamily: "monospace" }}
						>
							{list?.response?.status}
						</p>
						{list?.response?.data?.ErrorMessage &&
							list.response.data.ErrorMessage.map((e) => {
								return <p className="text-xs">{e}</p>;
							})}
					</div>
				) : list && list?.length !== 0 ? (
					list?.map((e, i) => {
						console.log(e, "lsit");
						return (
							<>
								<ReserveCourse reserve={e} />
							</>
						);
					})
				) : (
					<ClipLoader size={50} />
				)}
			</div>
		</>
	);
};

export default MyReservedList;
