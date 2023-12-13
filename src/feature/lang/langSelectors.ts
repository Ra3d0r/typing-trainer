import {RootState} from '@store/store';

export const selectLang = (state: RootState) => state.lang.lang;
