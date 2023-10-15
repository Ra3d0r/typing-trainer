const millisecondsToDigitTime = (milliseconds: number): string => {
	if (milliseconds <= 0) {
		return '00:00';
	}
	const date = new Date(milliseconds);
	const options: Intl.DateTimeFormatOptions = {minute: '2-digit', second: '2-digit'};
	return date.toLocaleTimeString([], options);
};

export default millisecondsToDigitTime;
