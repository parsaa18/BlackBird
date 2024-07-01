import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./slider.css";

const Slider = () => {
	return (
		<div className="w-[700px] h-[550px] relative top-[-770px] left-[-600px] bg-[#004D43] rounded-3xl">
			<img
				src="../src/assets/image/Group 261.png"
				className="w-[20%] relative right-[280px] top-[20px]"
			/>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5500,
					disableOnInteraction: false,
				}}
			
				pagination={{
					clickable: true,
					type: "bullets",
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className="relative top-[10px]  h-[500px]"
				dir="ltr"
			>
				<SwiperSlide>
					<h1 className="font-bold text-3xl text-white relative left-[250px] top-[250px]">
						پنل اختصاصی
					</h1>
					<div className="rounded-3xl text-white bg-[#4d615e8f] relative top-[280px] left-[180px]  w-[300px] h-[80px] text-center ">
						<span className="relative top-[20px]">
							پنل مدیریتی دوره و پروفایل شما در جهت سادگی دسترسی
						</span>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-bold text-3xl text-white relative left-[240px] top-[250px]">
						دسته بندی دوره ها
					</h1>
					<div className="rounded-3xl text-white bg-[#4d615e8f] relative top-[280px] left-[200px]  w-[300px] h-[80px] text-center ">
						<span className="relative top-[20px]">
							به راحتی میتونید دوره دلخواه خودتون رو در دسته بندی ها پیدا و رزرو
							کنید
						</span>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<h1 className="font-bold text-3xl text-white relative left-[170px] top-[250px]">
						اساتید برتر از تمامی نقاط دنیا
					</h1>
					<div className="rounded-3xl text-white bg-[#4d615e8f] relative top-[280px] left-[200px]  w-[300px] h-[80px] text-center ">
						<span className="relative top-[20px]">
							اساتید برتر دنیا که برای شما دوره های مبتدی،متوسط،پیشرفته برگزار
							می کنند
						</span>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export { Slider };
