import {typeModeUnion} from '@types';

import {RootState} from '@store/store';

export const selectCurrentLetter = (state: RootState, mode: typeModeUnion) => {
	const index = state.typing[mode].currentTextIndex;
	return state.typing[mode].currentText[index];
};

export const selectPreviousLetter = (state: RootState, mode: typeModeUnion) => {
	const index = state.typing[mode].currentTextIndex;
	return state.typing[mode].currentText[index - 1 < 0 ? 0 : index - 1];
};

export const selectCurrentTextIndex = (state: RootState, mode: typeModeUnion) =>
	state.typing[mode].currentTextIndex;
export const selectCurrentText = (state: RootState, mode: typeModeUnion) =>
	state.typing[mode].currentText;
export const selectAllInfoText = (state: RootState, mode: typeModeUnion) => state.typing[mode];

export const selectTypingStatus = (state: RootState, mode: typeModeUnion) =>
	state.typing[mode].status;
