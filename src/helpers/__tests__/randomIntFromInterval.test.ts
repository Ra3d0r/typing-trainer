import randomIntFromInterval from '../utils/randomIntFromInterval';

describe('randomIntFromInterval', () => {
	it('should return number between 0 and 10', () => {
		const result = randomIntFromInterval(0, 10);
		expect(result).toBeGreaterThanOrEqual(0);
		expect(result).toBeLessThanOrEqual(10);
	});
});
