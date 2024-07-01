import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Eyes = () => {
	const [rotate, setRotate] = useState(0);
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mousex = e.clientX;
			let mousey = e.clientY;
			let deltax = mousex - window.innerWidth / 2;
			let deltay = mousey - window.innerHeight / 2;
			let angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
			setRotate(angle);
		});
	}, []);
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed='0.15'
			className="w-full h-2/3 absolute"
			>
			<div 
					className="absolute w-full flex items-center justify-center gap-5 top-[40%] ">
						<div className="flex items-center justify-center bg-white rounded-full w-[120px] h-[120px] relative">
							<div
								style={{
									transform: `translate(-50%,-50%) rotate(${rotate - 45}deg)`,
								}}
								className="w-full h-2/3 absolute left-1/2 top-1/2 p-2"
							>
								<div className="bg-black w-20 h-20 rounded-full relative ">
									<div className=" p-5 w-full h-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
										<div className="bg-white w-7 h-7 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center bg-white rounded-full w-[120px] h-[120px] relative">
							<div
								style={{
									transform: `translate(-50%,-50%) rotate(${rotate - 45}deg)`,
								}}
								className="w-full h-2/3 absolute left-1/2 top-1/2 p-2"
							>
								<div className="bg-black w-20 h-20 rounded-full relative ">
									<div className=" p-5 w-full h-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
										<div className="bg-white w-7 h-7 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
					</div>			
		</div>
		
	);
};
export default Eyes;
