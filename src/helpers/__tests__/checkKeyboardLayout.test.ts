import checkKeyboardLayout from '../utils/checkKeyboardLayout';

describe('checkKeyboardLayout', () => {
	it('should return true', () => {
		expect(checkKeyboardLayout('en', '1')).toBe(true);
	});
	it('should return true', () => {
		expect(checkKeyboardLayout('en', 'D')).toBe(true);
	});
	it('should return true', () => {
		expect(checkKeyboardLayout('en', '.')).toBe(true);
	});
});
