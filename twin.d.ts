import {css as cssImport} from '@emotion/react';
import {CSSInterpolation} from '@emotion/serialize';
import styledImport from '@emotion/styled';
import 'twin.macro';

declare module 'twin.macro' {
	const css: typeof cssImport;
	const styled: typeof styledImport;
}

declare module 'react' {
	interface DOMAttributes<T> {
		css?: CSSInterpolation;
	}
}
