import {TwStyle} from 'twin.macro';

type Mapping<T> = {
	[Property in keyof T]: T[Property];
};

export type typeLoading = 'sm' | 'lg';

export type typeStyles = Mapping<Record<typeLoading, TwStyle>>;

export interface IPropsLoading {
	size?: typeLoading;
	className?: string;
}
