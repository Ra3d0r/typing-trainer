import {PayloadAction} from '@reduxjs/toolkit';

import {typeMode, typeModeUnion, typeStatus} from '@types';

import {AppDispatch, typeApi} from '@store/store';

type Mapping<T, N> = {
	[Property in keyof T]: N;
};

interface game {
	currentText: string[];
	currentTextIndex: number;
	errorsIndex: Record<number, 'error'>;
	allText: string[] | Record<string, unknown>[];
	status: typeStatus;
	error: null | string;
}

interface addCurrentText {
	text: string;
	mode: typeModeUnion;
}

interface addErrorIndex {
	currentTextIndex: number;
	mode: typeModeUnion;
}

interface ActionPreviousLetter {
	mode: typeModeUnion;
	currentTextIndex: number;
}

type excludeType = Exclude<typeModeUnion, 'custom'>;

export interface IConfigText {
	mode: excludeType;
}

export interface IConfigThunkOptions {
	dispatch: AppDispatch;
	rejectWithValue: string;
	extra: {
		api: typeApi;
	};
}

export interface IReturnThunk {
	allText: string[] | Record<string, unknown>[];
	mode: excludeType;
}

export type typeInitialState = Mapping<typeMode, game>;

export type typeActionCurrentText = PayloadAction<addCurrentText>;
export type typeActionErrorIndex = PayloadAction<addErrorIndex>;
export type typeActionNextLetter = PayloadAction<{mode: typeModeUnion}>;
export type typeActionPreviousLetter = PayloadAction<ActionPreviousLetter>;
export type typeActionStatusCustom = PayloadAction<typeStatus>;
