import {TFunction} from 'i18next';

import {typeStatus} from '@types';
import {typeLang, typeModeUnion} from '@types';

import {AppDispatch} from '@store/store';

export type typeHandleKeyDown = (arg: {
	event: KeyboardEvent;
	setIsShiftPressed: React.Dispatch<React.SetStateAction<boolean>>;
	setEventKeyCode: React.Dispatch<React.SetStateAction<string>>;
	status: typeStatus;
	target: string | undefined;
	dispatch: AppDispatch;
	currentText: string[];
	currentTextIndex: number;
	mode: typeModeUnion;
	allText: string[] | Record<string, unknown>[];
	isAuth: boolean;
	errorsIndex: Record<number, 'error'>;
	lang: typeLang;
	t: TFunction<'translation'>;
}) => void;

export default typeHandleKeyDown;
