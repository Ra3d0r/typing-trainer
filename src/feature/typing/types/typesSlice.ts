import {PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, typeApi} from 'src/store/store';
import {typeMode, typeModeUnion, typeStatus} from 'src/types';

type Mapping<T, N> = {
	[Property in keyof T]: N;
};

interface game {
	currentText: string[];
	currentTextIndex: number;
	errorsIndex: number[];
	allText: string[];
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

export interface IConfigText {
	url: string;
	mode: typeModeUnion;
	headers: Record<string, string>;
}

export interface IConfigThunkOptions {
	dispatch: AppDispatch;
	rejectWithValue: string;
	extra: {
		api: typeApi;
	};
}

export interface IReturnThunk {
	allText: string[];
	mode: typeModeUnion;
}

export type typeInitialState = Mapping<typeMode, game>;

export type typeActionCurrentText = PayloadAction<addCurrentText>;
export type typeActionErrorIndex = PayloadAction<addErrorIndex>;
export type typeActionNextLetter = PayloadAction<{mode: typeModeUnion}>;
