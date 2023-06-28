import {typeModeUnion} from '@types';

export type typeRandomTextFromArray = (
	array: string[] | Record<string, string | unknown>[],
	mode: Exclude<typeModeUnion, 'custom'>,
	textKey: Record<string, string | null>,
) => string;
