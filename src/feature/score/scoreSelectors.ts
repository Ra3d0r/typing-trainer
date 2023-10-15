import {typeModeUnion} from '@types';

import {RootState} from '@store/store';

export const selectTypos = (state: RootState, mode: typeModeUnion) => state.score[mode].typos;
export const selectAccuracy = (state: RootState, mode: typeModeUnion) => state.score[mode].accuracy;
export const selectTime = (state: RootState, mode: typeModeUnion) => state.score[mode].time;
export const selectTotalChars = (state: RootState, mode: typeModeUnion) => state.score[mode].chars;
export const selectCorrectness = (state: RootState, mode: typeModeUnion) =>
	state.score[mode].correctness;
