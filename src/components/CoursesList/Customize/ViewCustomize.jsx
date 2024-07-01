import { CiFilter, CiGrid2H, CiGrid41 } from "react-icons/ci";
import { CgSortAz } from "react-icons/cg";

const Customize = ({ vertical, setVertical }) => {
	return (
		<div className=" flex justify-center gap-2 items-center  border-b-2 border-metricGray3 py-3">
			{vertical ? (
				<CiGrid2H
					className="text-2xl cursor-pointer text-metricBlack/30"
					onClick={() => {
						setVertical(false);
					}}
				/>
			) : (
				<CiGrid2H
					className="text-2xl cursor-pointer text-metricBlack"
					onClick={() => {
						setVertical(false);
					}}
				/>
			)}
			{vertical ? (
				<CiGrid41
					className="text-2xl cursor-pointer text-metricBlack"
					onClick={() => {
						setVertical(true);
					}}
				/>
			) : (
				<CiGrid41
					className="text-2xl cursor-pointer text-metricBlack/30"
					onClick={() => {
						setVertical(true);
					}}
				/>
			)}
		</div>
	);
};

export default Customize;
