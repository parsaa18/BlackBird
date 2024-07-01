import Reveal from "../../common/reveal";

const Hero = () => {
	return (
		<section
			data-scroll
			data-scroll-section
			data-scroll-speed="-0.3"
			className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-20 max-w-full lg:max-w-[80%] px-[30px] pr-[140px] md:pr-[30px]"
		>
			<Reveal del={0.1} dur={0.4}>
				<h1 className="text-4xl md:text-7xl z-10 font-bold p-1">بلاگ ها</h1>
			</Reveal>
			<Reveal dirX={true}>
				<p className="max-w-[400px] text-xs md:text-base text-justify">
					بلاگ ، مصاحبه ها ، معرفی کتاب ، تمامی مواردی که میتوانند برای شما مفید
					باشند
				</p>
			</Reveal>
		</section>
	);
};

export default Hero;
