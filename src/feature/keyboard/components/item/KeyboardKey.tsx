import classNameKey from '../../helpers/classNameKey';

interface props {
	kbd: string;
	eventKey: string;
	id: string;
	keyTarget: string | null;
	currentLetter: string | undefined;
	previousKeyId: string;
}

const KeyboardKey = ({kbd, eventKey, id, keyTarget, currentLetter, previousKeyId}: props) => {
	const className = classNameKey(id, eventKey, keyTarget, currentLetter, previousKeyId);

	switch (id) {
		case 'Space':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		case 'ShiftLeft':
			return <kbd className={className + ' grow w-5 sm:w-10 md:grow-0 md:w-24'}>{kbd}</kbd>;
		case 'ShiftRight':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		case 'Enter':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		case 'Backslash':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		case 'CapsLock':
			return <kbd className={className + ' w-10 sm:w-16 md:w-20 md:p-0 md:pt-3'}>{kbd}</kbd>;
		case 'Tab':
			return <kbd className={className + ' sm:w-14'}>{kbd}</kbd>;
		default:
			return <kbd className={className}>{kbd}</kbd>;
	}
};

export default KeyboardKey;
