const convertDataUrlToFile = (dataUrl) => {
	// Convert the data URL to a Blob
	const byteString = atob(dataUrl.split(",")[1]);
	const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
	const ab = new ArrayBuffer(byteString.length);
	const ia = new Uint8Array(ab);
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
	const blob = new Blob([ab], { type: mimeString });

	// Create a File object from the Blob
	const file = new File([blob], "profileImg.png", { type: mimeString });

	return file;
};
export default convertDataUrlToFile;
