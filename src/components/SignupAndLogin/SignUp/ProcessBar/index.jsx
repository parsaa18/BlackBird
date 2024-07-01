import { useLocation } from "react-router-dom";

const ProcessBar = () => {
	const loc = useLocation();

	return (
		<ol className="flex items-center justify-center w-full ">
			<li
				className={`transition-all duration-700 flex w-full items-center after:w-full  after:border-[1px]  ${
					loc.pathname.includes("Step2") || loc.pathname.includes("Step3")
						? "after:border-metricOrange"
						: "after:border-metricGray2"
				}   `}
			>
				<span
					className={`transition-all duration-700 flex items-center justify-center ${
						loc.pathname.includes("Step2") || loc.pathname.includes("Step3")
							? "bg-metricOrange"
							: "bg-metricGray2"
					}  w-12 h-12 rounded-full  shrink-0`}
				>
					1
				</span>
			</li>
			<li
				className={`transition-all duration-700 flex w-full items-center after:w-full   after:border-[1px] ${
					loc.pathname.includes("Step3")
						? "after:border-metricOrange"
						: "after:border-metricGray2"
				}     `}
			>
				<span
					className={`transition-all duration-700 flex items-center justify-center  bg-metricGray2 w-12 h-12 rounded-full  shrink-0   ${
						loc.pathname.includes("Step3")
							? "bg-metricOrange"
							: loc.pathname.includes("Step2")
							? "bg-metricGray2"
							: "bg-metricGray3/5"
					}`}
				>
					2
				</span>
			</li>
			<li className="flex items-center  ">
				<span
					className={`transition-all duration-700 flex items-center justify-center  bg-metricGray2 w-12 h-12 rounded-full  shrink-0 ${
						loc.pathname.includes("Step3")
							? "bg-metricGray2"
							: "bg-metricGray3/5"
					}`}
				>
					3
				</span>
			</li>
		</ol>
	);
};

export default ProcessBar;
