import {typeModeUnion} from '@types';

export interface ITabs {
	tabs: Record<typeModeUnion, typeModeUnion>;
}

export interface ITab {
	key: typeModeUnion;
	value: typeModeUnion;
	active: boolean;
	onClick: () => void;
}
