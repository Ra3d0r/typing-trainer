import {createAsyncThunk} from '@reduxjs/toolkit';

import {typeModeUnion} from '@types';

import setScore from '@helpers/setScore';

import {RootState} from '@store/store';

export interface IConfigThunk {
	mode: typeModeUnion;
}

export type TReturnThunk = void;

const postScore = createAsyncThunk<TReturnThunk, IConfigThunk>(
	'@@firebase/post-score',
	async ({mode}, {getState}) => {
		const score = (getState() as RootState).score[mode];
		setScore(score, mode);
	},
);

export default postScore;
