const millisecondsToDigitTime = (milliseconds: number): string => {
	const date = new Date(milliseconds);
	const options: Intl.DateTimeFormatOptions = {minute: '2-digit', second: '2-digit'};
	return date.toLocaleTimeString([], options);
};

export default millisecondsToDigitTime;
