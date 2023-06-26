import {RootState} from 'src/store/store';
import {typeModeUnion} from 'src/types';

export const selectCurrentLetter = (state: RootState, mode: typeModeUnion) => {
	const index = state.typing[mode].currentTextIndex;
	return state.typing[mode].currentText[index];
};

export const selectCurrentTextIndex = (state: RootState, mode: typeModeUnion) =>
	state.typing[mode].currentTextIndex;
export const selectCurrentText = (state: RootState, mode: typeModeUnion) =>
	state.typing[mode].currentText;
export const selectAllInfoText = (state: RootState, mode: typeModeUnion) => state.typing[mode];

export const selectTypingStatus = (state: RootState, mode: typeModeUnion) =>
	state.typing[mode].status;
