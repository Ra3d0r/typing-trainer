import {typeToast} from '@types';

export type typeUseToast = (ms: number) => [string | null, typeToast, () => void];
