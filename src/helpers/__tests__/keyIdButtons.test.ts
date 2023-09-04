import keyIdButtons from '../keyIdButtons';

describe('keyIdButtons', () => {
	it('should return Digit1', () => {
		expect(keyIdButtons('1')).toBe('Digit1');
	});
	it('should return Digit1', () => {
		expect(keyIdButtons('r')).toBe('KeyR');
	});
	it('should return Slash', () => {
		expect(keyIdButtons('/')).toBe('Slash');
	});
	it('should return Tab', () => {
		expect(keyIdButtons('Tab')).toBe('Tab');
	});
	it('should return KeyT', () => {
		expect(keyIdButtons('T')).toBe('KeyT');
	});
	it('should return null', () => {
		expect(keyIdButtons(undefined)).toBeNull();
	});
	it('should return null', () => {
		expect(keyIdButtons('CapsLock')).toBeNull();
	});
});
