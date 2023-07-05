import {typeStatus} from '@types';

export type typeHandleKeyDown = (arg: {
	event: KeyboardEvent;
	setIsShiftPressed: React.Dispatch<React.SetStateAction<boolean>>;
	setEventKeyCode: React.Dispatch<React.SetStateAction<string>>;
	status: typeStatus;
}) => void;

export default typeHandleKeyDown;
