import {CSSInterpolation} from '@emotion/serialize';

import {typeToast} from '@types';

type Mapping<T> = {
	[Property in keyof T]: T[Property];
};

interface styleElem {
	btn: CSSInterpolation;
	alert: CSSInterpolation;
}

export interface IPropsToastAlert {
	type: typeToast;
	children: React.ReactNode;
	onClick: () => void;
}

export type typeStyles = Mapping<Record<typeToast, styleElem>>;
