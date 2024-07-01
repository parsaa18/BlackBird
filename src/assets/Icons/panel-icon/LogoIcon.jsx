const LogoIcon = ({ w = "48", h = "49", color = "#313131" }) => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 48 49"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="23" height="33" rx="4" fill={color} />
			<rect y="36" width="23" height="13" rx="4" fill={color} />
			<rect x="25" y="16" width="23" height="33" rx="4" fill={color} />
			<rect x="25" width="23" height="13" rx="4" fill={color} />
		</svg>
	);
};
export default LogoIcon;
