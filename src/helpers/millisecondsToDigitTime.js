const millisecondsToDigitTime = (milliseconds) => {
	const date = new Date(milliseconds);
	const options = {minute: '2-digit', second: '2-digit'};
	return date.toLocaleTimeString([], options);
};

export default millisecondsToDigitTime;
