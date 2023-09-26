const classNameKey = (
	keyId: string,
	eventKeyId: string,
	targetKeyId: string | null,
	currentLetter: string | undefined,
): string => {
	switch (true) {
		case eventKeyId === targetKeyId && keyId === eventKeyId:
			return 'target-typed';

		case keyId === 'ShiftLeft' && keyId === eventKeyId:
		case keyId === 'ShiftRight' && keyId === eventKeyId:
		case keyId === 'Backspace' && keyId === eventKeyId:
			return 'special';

		case keyId === eventKeyId:
			return 'mis-typed';
		case keyId === targetKeyId:
			return 'target';

		case currentLetter && keyId === 'ShiftLeft' && /[A-Z]/.test(currentLetter as string):
		case currentLetter && keyId === 'ShiftRight' && /[A-Z]/.test(currentLetter as string):
			return 'target';

		default:
			return 'untyped';
	}
};

export default classNameKey;
