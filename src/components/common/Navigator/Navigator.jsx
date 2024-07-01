const Navigator = ({ children, directionLink, directionName }) => {
	handleNavigate();

	return (
		<>
			<span onClick={handleNavigate}>{children}</span>
			<PageTransitionEvent />
		</>
	);
};

export default Navigator;
