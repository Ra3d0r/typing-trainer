const deleteWords = (text: string, symbol: string): string => {
	const indexWord = text.indexOf(symbol);
	if (indexWord === -1) {
		return text;
	}
	return text.slice(0, indexWord);
};

export default deleteWords;
