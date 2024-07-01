import Reveal from "../../common/reveal";

const Hero = ({ courseTotalCount }) => {
	return (
		<section
			data-scroll
			data-scroll-section
			data-scroll-speed="-0.3"
			className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-20 max-w-full lg:max-w-[80%] px-[30px] pr-[140px] md:pr-[30px]"
		>
			<Reveal del={0.1} dur={0.4}>
				<div className="flex gap-1 items-start">
					<h1 className="text-4xl md:text-6xl leading-normal lg:text-7xl z-10 font-bold p-2">
						دوره ها
					</h1>

					<h5>({courseTotalCount})</h5>
				</div>
			</Reveal>

			<Reveal dirX={true}>
				<p className="max-w-[400px] text-xs md:text-base text-justify">
					بیش از 50 استاد در سراسر جهان گرد هم آمده اند تا دوره هایی را برای شما
					ایجاد کنند تا به رشد شخصی و حرفه ای خود ادامه دهید و در بهترین مسیر
					موفقیت قرار بگیرید.
				</p>
			</Reveal>
		</section>
	);
};

export default Hero;
