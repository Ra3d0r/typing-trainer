import capitalizeFirstLetter from '../capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
	it('should return 1', () => {
		expect(capitalizeFirstLetter('1')).toBe('1');
	});
	it('should return S', () => {
		expect(capitalizeFirstLetter('s')).toBe('S');
	});
	it('should return React', () => {
		expect(capitalizeFirstLetter('react')).toBe('React');
	});
	it('should return ""', () => {
		expect(capitalizeFirstLetter('')).toBe('');
	});
});
