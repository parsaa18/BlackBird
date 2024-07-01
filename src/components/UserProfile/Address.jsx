import { useEffect, useState } from "react";
import MapComponent from "./Map/Map";
const Address = () => {
	return (
		<div className="ADDRESS w-[2/3] sm:w-[850px] h-[350px]">
			<MapComponent />
		</div>
	);
};

export default Address;
