import {createAsyncThunk} from '@reduxjs/toolkit';

import {typeLang, typeModeUnion} from '@types';

import setScore from '@helpers/setScore';

import {RootState} from '@store/store';

export interface IConfigThunk {
	mode: typeModeUnion;
	lang: typeLang;
}

export type TReturnThunk = void;

const postScore = createAsyncThunk<TReturnThunk, IConfigThunk>(
	'@@firebase/post-score',
	async ({mode, lang}, {getState}) => {
		const score = (getState() as RootState).score[mode];
		setScore({...score, lang}, mode);
	},
);

export default postScore;
