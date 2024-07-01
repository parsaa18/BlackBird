import { useState, useEffect, useRef, useMemo } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer as LeafletMap, TileLayer, Marker } from "react-leaflet";
import "./map.css";
import { useSelector } from "react-redux";
import { editProfileInfoApi } from "../../../core/services/api/panel/editProfileInfo";
const MapComponent = () => {
	const [initialPos, setInitialPos] = useState([36.5969567, 53.0645213]);
	const { profile } = useSelector((s) => s.profile);

	const markerRef = useRef(null);

	const editLngLatProfile = async (lat, lng) => {
		console.log(profile);
		if (Object.keys(profile).length !== 0 && profile) {
			const newProfile = { ...profile, latitude: lat, longitude: lng };
			const formData = new FormData();
			Object.entries(newProfile).map(([key, value]) => {
				value && formData.append(key, value);
			});
			const result = await editProfileInfoApi(formData);
			console.log(result);
		}
	};

	const eventHandlers = () => {
		const markerR = markerRef.current;
		if (markerR !== null) {
			const newlat = markerR.getLatLng().lat;
			const newlng = markerR.getLatLng().lng;
			setInitialPos([newlat, newlng]);
			editLngLatProfile(newlat, newlng);
		}
	};

	useEffect(() => {
		if (profile.latitude && profile.longitude) {
			setInitialPos([profile.latitude, profile.longitude]);
		} else {
			setInitialPos([36.5969567, 53.0645213]);
		}
		console.log(profile, "onMount");
	}, [profile]);
	return (
		<>
			{Object.keys(profile).length !== 0 && profile ? (
				<LeafletMap center={initialPos} zoom={13}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker
						position={initialPos}
						ref={markerRef}
						draggable
						eventHandlers={{ dragend: eventHandlers }}
					></Marker>
				</LeafletMap>
			) : (
				<div>دیتای شما بارگذاری نشده</div>
			)}
		</>
	);
};

export default MapComponent;
