import {typeLang, typeModeUnion} from '@types';

export type dataLoadingText =
	| Record<string, string | unknown>
	| string[]
	| Record<string, string | unknown>[];

export type typeLoadText = (
	mode: Exclude<typeModeUnion, 'custom'>,
	lang: typeLang,
) => Promise<[string[] | Record<string, unknown>[], string]>;
