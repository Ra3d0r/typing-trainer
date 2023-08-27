import millisecondsToDigitTime from '../millisecondsToDigitTime';

describe('millisecondsToDigitTime', () => {
	it('should return "00:01"', () => {
		expect(millisecondsToDigitTime(1000)).toBe('00:01');
	});
	it('should return "00:00"', () => {
		expect(millisecondsToDigitTime(100)).toBe('00:00');
	});
	it('should return "00:12"', () => {
		expect(millisecondsToDigitTime(12500)).toBe('00:12');
	});
	it('should return "00:00"', () => {
		expect(millisecondsToDigitTime(-5000)).toBe('00:00');
	});
	it('should return "00:00"', () => {
		expect(millisecondsToDigitTime(0)).toBe('00:00');
	});
});
