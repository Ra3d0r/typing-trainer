import findValue from '../utils/findValue';

describe('findValue', () => {
	it('should return null', () => {
		expect(findValue({}, 'key')).toBe(null);
	});
	it('should return null', () => {
		expect(findValue({age: 100}, 'key')).toBe(null);
	});
	it('should return value', () => {
		expect(findValue({city: 'Moscow', geo: {lat: 1, lon: 1}}, 'lat')).toBe(1);
	});
});
