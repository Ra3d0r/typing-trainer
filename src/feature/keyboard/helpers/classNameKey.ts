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

		case currentLetter && keyId === 'ShiftLeft' && isShiftLetter(currentLetter as string):
		case currentLetter && keyId === 'ShiftRight' && isShiftLetter(currentLetter as string):
			return 'target';

		default:
			return 'untyped';
	}
};

function isShiftLetter(currentLetter: string): boolean {
	return /[A-Z]|[@#$%^&*()_+{}|:"<>?~!]|[А-Я]/.test(currentLetter);
}

export default classNameKey;
