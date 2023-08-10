import {PayloadAction} from '@reduxjs/toolkit';

import {typeMode, typeModeUnion} from '@types';

type Mapping<T, N> = {
	[Property in keyof T]: N;
};

interface score {
	accuracy: number;
	typos: number;
	time: number;
	chars: number;
}

interface payloadTotalChars {
	mode: typeModeUnion;
	chars: number;
}

interface payloadUpdateAccuracy {
	mode: typeModeUnion;
	percent: number;
}

export type typeInitialState = Mapping<typeMode, score>;

export type typeActionResetScore = PayloadAction<{mode: typeModeUnion}>;
export type typeActionAddTotalChars = PayloadAction<payloadTotalChars>;
export type typeActionUpdateAccuracy = PayloadAction<payloadUpdateAccuracy>;
export type typeActionIncreaseTypos = PayloadAction<{mode: typeModeUnion}>;
export type typeActionUpdateTime = PayloadAction<{mode: typeModeUnion}>;
