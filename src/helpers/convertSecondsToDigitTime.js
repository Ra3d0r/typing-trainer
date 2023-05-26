const convertSecondsToDigitTime = (seconds) => {
	const date = new Date(seconds);
	const options = {minute: '2-digit', second: '2-digit'};
	return date.toLocaleTimeString([], options);
};

export {convertSecondsToDigitTime};
