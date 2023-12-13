import {PayloadAction} from '@reduxjs/toolkit';

import {typeLang} from '@types';

export interface IInitialState {
	lang: string;
}

export type typeSetLang = PayloadAction<{lang: typeLang}>;
