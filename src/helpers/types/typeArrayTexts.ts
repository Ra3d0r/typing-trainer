import {typeModeUnion} from '@types';

export type typeArrayTexts = (
	object: Record<string, string | unknown> | string[] | Record<string, string | unknown>[],
	mode: Exclude<typeModeUnion, 'custom'>,
	TextsByKey: Record<string, string | null>,
) => string[] | Record<string, string | unknown>[];
