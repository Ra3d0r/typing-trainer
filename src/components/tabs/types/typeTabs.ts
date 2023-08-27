import {typeModeUnion} from '@types';

export interface ITabs {
	tabs: Record<typeModeUnion, typeModeUnion>;
	onClick: (key: typeModeUnion) => void;
	currentMode: typeModeUnion;
}

export interface ITab {
	key: typeModeUnion;
	value: typeModeUnion;
	active: boolean;
	onClick: () => void;
}
