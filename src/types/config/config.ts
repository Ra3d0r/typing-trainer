import {mode} from 'public/data/mode.js';

type Mapping<T, N> = {
	[Property in keyof T as Exclude<Property, 'custom'>]: N;
};

type Headers =
	| {
			'X-Api-Key': string;
			Authorization: string;
	  }
	| {};

export interface IText {
	url: Mapping<typeof mode, string>;
	TextsByKey: Mapping<typeof mode, string | null>;
	textKey: Mapping<typeof mode, string | null>;
	headers: Mapping<typeof mode, Headers>;
}
