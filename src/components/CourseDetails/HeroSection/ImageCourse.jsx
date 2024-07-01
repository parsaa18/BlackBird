const ImageCourse = ({ image }) => {
	return (
		<div className=" bg-metricGray rounded-3xl max-h-[250px] md:max-h-[380px] w-full overflow-hidden">
			<img src={image} className="w-full h-full" />
		</div>
	);
};

export default ImageCourse;
