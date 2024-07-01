import { Link } from "react-router-dom";

const NavigationLink = ({ to, children, name, active }) => {
	return (
		<Link
			to={to}
			className={`flex items-center justify-start gap-3  rounded-full w-full  transition-all duration-300 ${
				active && "bg-metricOrange"
			} ${!active && "hover:bg-metricGray4"}`}
		>
			{children}
			<p
				className={`text-sm	 font-bold text-metricBlack overflow-hidden whitespace-nowrap ${
					active && "text-bold "
				}`}
			>
				{name}
			</p>
		</Link>
	);
};
export default NavigationLink;
