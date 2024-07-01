const MyListHeader = ({ title, numbers }) => {
	return (
		<div className="flex items-start gap-2 text-metricBlack">
			<h1 className="text-2xl md:text-5xl leading-normal font-extrabold">
				{title}
			</h1>
			<p className="mt-1">({numbers})</p>
		</div>
	);
};
export default MyListHeader;
