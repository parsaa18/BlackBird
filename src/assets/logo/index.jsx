const MetricLogo = ({ color = "#313131" }) => {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 172 49"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="23" height="33" rx="4" fill={color} />
			<rect y="36" width="23" height="13" rx="4" fill={color} />
			<rect x="25" y="16" width="23" height="33" rx="4" fill={color} />
			<rect x="25" width="23" height="13" rx="4" fill={color} />
			<path
				d="M87.268 35.728C86.0547 35.728 85.1867 35.3827 84.664 34.692C84.1413 33.9827 83.88 32.9467 83.88 31.584C83.88 30.2213 84.3187 27.0853 85.196 22.176H84.748C83.6093 23.6693 82.6667 25.452 81.92 27.524C81.1733 29.596 80.716 31.4627 80.548 33.124C79.6333 33.9827 78.5787 34.412 77.384 34.412C76.8987 34.412 76.4693 34.244 76.096 33.908C75.7413 33.5533 75.3867 32.9467 75.032 32.088C74.3413 30.352 73.8467 27.048 73.548 22.176H73.1C72.1853 26.1893 71.728 29.0173 71.728 30.66C71.728 32.3027 72.008 33.572 72.568 34.468C71.448 35.308 70.2813 35.728 69.068 35.728C67.8547 35.728 66.9867 35.3827 66.464 34.692C65.9413 33.9827 65.68 32.9373 65.68 31.556C65.68 30.156 66.268 26.208 67.444 19.712L65.96 16.716C68.0693 15.3533 69.992 14.672 71.728 14.672C72.4933 14.672 73.1373 14.756 73.66 14.924C74.2013 15.0733 74.7147 15.372 75.2 15.82C75.704 16.268 76.1147 16.8933 76.432 17.696C77.16 19.5067 77.6827 22.148 78 25.62H78.336C79.3067 22.764 80.6507 20.3093 82.368 18.256C83.3013 17.1547 84.412 16.2867 85.7 15.652C87.0067 15.0173 88.416 14.7 89.928 14.7C91.3653 14.7 92.084 15.568 92.084 17.304C92.084 17.8827 91.72 20.0387 90.992 23.772C90.2827 27.4867 89.928 29.6987 89.928 30.408C89.928 32.2187 90.208 33.572 90.768 34.468C89.648 35.308 88.4813 35.728 87.268 35.728ZM102.84 35.7C100.282 35.7 98.3037 35.0373 96.9037 33.712C95.5224 32.3867 94.8317 30.5947 94.8317 28.336C94.8317 25.3307 95.8584 22.8947 97.9117 21.028C99.9837 19.1427 102.578 18.2 105.696 18.2C107.432 18.2 108.748 18.592 109.644 19.376C110.54 20.1413 110.988 21.1587 110.988 22.428C110.988 24.164 110.138 25.6107 108.44 26.768C106.76 27.9067 104.156 28.4853 100.628 28.504C100.684 29.6987 100.954 30.6413 101.44 31.332C101.925 32.004 102.532 32.34 103.26 32.34C103.988 32.34 104.613 32.0973 105.136 31.612C105.677 31.1267 105.948 30.3333 105.948 29.232C108.673 29.232 110.036 29.876 110.036 31.164C110.036 32.2653 109.364 33.3013 108.02 34.272C106.676 35.224 104.949 35.7 102.84 35.7ZM105.22 21.476C104.268 21.476 103.39 21.952 102.588 22.904C101.804 23.856 101.234 24.976 100.88 26.264C102.746 26.1147 104.146 25.6947 105.08 25.004C106.032 24.2947 106.508 23.548 106.508 22.764C106.508 22.3907 106.386 22.0827 106.144 21.84C105.92 21.5973 105.612 21.476 105.22 21.476ZM114.41 24.892C114.279 24.3693 114.214 23.884 114.214 23.436C114.214 22.5213 114.485 21.8307 115.026 21.364C115.567 20.8973 116.267 20.664 117.126 20.664C117.126 19.6933 116.874 18.6387 116.37 17.5C117.285 16.828 118.115 16.324 118.862 15.988C119.627 15.6333 120.43 15.456 121.27 15.456C122.11 15.456 122.689 15.6147 123.006 15.932C123.342 16.2307 123.51 16.6973 123.51 17.332C123.51 17.9667 123.379 18.956 123.118 20.3C123.865 20.188 124.621 20.0293 125.386 19.824C125.517 20.216 125.582 20.72 125.582 21.336C125.582 21.952 125.339 22.5307 124.854 23.072C124.387 23.5947 123.697 23.856 122.782 23.856H122.362C121.69 26.8987 121.354 29.2413 121.354 30.884C121.354 32.5267 121.643 33.6747 122.222 34.328C121.177 35.2427 120.066 35.7 118.89 35.7C117.714 35.7 116.865 35.3547 116.342 34.664C115.838 33.9547 115.586 32.8627 115.586 31.388C115.586 30.492 115.913 28.14 116.566 24.332C115.819 24.4627 115.101 24.6493 114.41 24.892ZM127.95 32.228C127.95 31.4813 128.137 30.0347 128.51 27.888C128.902 25.7413 129.304 23.7813 129.714 22.008L128.258 19.768C130.592 18.7227 132.225 18.2 133.158 18.2C134.11 18.2 134.586 18.7973 134.586 19.992C134.586 20.6453 134.278 22.008 133.662 24.08L133.942 24.22C135.286 20.2067 136.957 18.2 138.954 18.2C139.869 18.2 140.569 18.48 141.054 19.04C141.54 19.6 141.782 20.2253 141.782 20.916C141.782 21.9427 141.4 22.82 140.634 23.548C139.869 24.276 138.721 24.64 137.19 24.64C134.876 24.64 133.718 27.02 133.718 31.78C133.718 32.9373 133.914 33.7867 134.306 34.328C133.149 35.2427 132.085 35.7 131.114 35.7C129.005 35.7 127.95 34.5427 127.95 32.228ZM152.375 13.776C152.375 14.4853 152.001 15.1013 151.255 15.624C150.508 16.128 149.659 16.38 148.707 16.38C147.755 16.38 146.999 16.1933 146.439 15.82C145.897 15.4467 145.627 14.9427 145.627 14.308C145.627 13.4493 146.028 12.7773 146.831 12.292C147.633 11.8067 148.483 11.564 149.379 11.564C150.275 11.564 150.993 11.7507 151.535 12.124C152.095 12.4973 152.375 13.048 152.375 13.776ZM146.915 35.7C145.757 35.7 144.917 35.4107 144.395 34.832C143.872 34.2533 143.611 33.376 143.611 32.2C143.611 31.0053 144.208 27.8227 145.403 22.652L143.835 20.3C146.168 18.9 148.007 18.2 149.351 18.2C150.116 18.2 150.657 18.368 150.975 18.704C151.292 19.0213 151.451 19.544 151.451 20.272C151.451 20.552 151.105 22.1947 150.415 25.2C149.724 28.2053 149.379 30.352 149.379 31.64C149.379 32.928 149.668 33.824 150.247 34.328C149.201 35.2427 148.091 35.7 146.915 35.7ZM154.466 28.336C154.466 25.3493 155.493 22.9133 157.546 21.028C159.6 19.1427 162.185 18.2 165.302 18.2C166.908 18.2 168.177 18.508 169.11 19.124C170.044 19.7213 170.51 20.4773 170.51 21.392C170.51 22.3067 170.193 23.0067 169.558 23.492C168.942 23.9773 168.261 24.22 167.514 24.22C166.786 24.22 166.114 24.024 165.498 23.632C164.901 23.24 164.434 22.6707 164.098 21.924C162.922 22.4093 161.989 23.268 161.298 24.5C160.626 25.732 160.29 26.964 160.29 28.196C160.29 29.428 160.533 30.4267 161.018 31.192C161.504 31.9573 162.138 32.34 162.922 32.34C163.706 32.34 164.341 32.0787 164.826 31.556C165.33 31.0333 165.582 30.2587 165.582 29.232C168.308 29.232 169.67 29.876 169.67 31.164C169.67 32.2653 168.98 33.3013 167.598 34.272C166.217 35.224 164.397 35.7 162.138 35.7C159.88 35.7 158.032 35.028 156.594 33.684C155.176 32.3213 154.466 30.5387 154.466 28.336Z"
				fill={color}
			/>
		</svg>
	);
};

export default MetricLogo;
