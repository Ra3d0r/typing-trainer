import {PayloadAction} from '@reduxjs/toolkit';

import {typeToast} from '@types';

export interface IInitialState {
	message: string | null;
	type: typeToast;
}

export type typeActionOpenToast = PayloadAction<{message: string; type: typeToast}>;
