import {DataSnapshot} from 'firebase/database';

import {typeModeUnion} from '@types';

export interface IPropsTableScore {
	headers: string[];
	columns: DataSnapshot[] | undefined;
	mode: typeModeUnion;
	action: ({id, mode}: {id: string; mode: typeModeUnion}) => void;
	loading?: boolean;
	error?: Error | undefined;
}
