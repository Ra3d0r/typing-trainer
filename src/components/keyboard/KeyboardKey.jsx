const KeyboardKey = ({kbd, className, id}) => {
	switch (id) {
		case 'Space':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		case 'ShiftLeft':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		case 'ShiftRight':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		case 'Enter':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		case 'Backslash':
			return <kbd className={className + ' grow'}>{kbd}</kbd>;
		default:
			return <kbd className={className}>{kbd}</kbd>;
	}
};

export {KeyboardKey};
