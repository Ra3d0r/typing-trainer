import {TFunction} from 'i18next';

import {typeLang, typeModeUnion} from '@types';

import {AppDispatch} from '@store/store';

interface params {
	event: KeyboardEvent;
	setIsShiftPressed: React.Dispatch<React.SetStateAction<boolean>>;
	setEventKeyCode: React.Dispatch<React.SetStateAction<string>>;
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
}

export type typeHandleKeyUp = (arg: params) => void;
