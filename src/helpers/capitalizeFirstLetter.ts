const capitalizeFirstLetter = (string: string | undefined | null) => {
	if (!string) {
		return string;
	}
	if (string.length === 0) {
		return string;
	}
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;
