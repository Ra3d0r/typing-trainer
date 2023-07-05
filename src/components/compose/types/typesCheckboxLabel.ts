import {FieldValues, UseFormRegister} from 'react-hook-form';

import {
	IDataFormCreateUser,
	IDataFormLoginUser,
	IDataFormResetPassword,
	typeCheckbox,
} from '@types';

export interface IPropsCheckboxLabel {
	name: typeCheckbox;
	register:
		| UseFormRegister<IDataFormCreateUser>
		| UseFormRegister<IDataFormLoginUser>
		| UseFormRegister<IDataFormResetPassword>;
	options?: FieldValues;
	label: string;
	link?: {
		to: string;
		text: string;
	};
}
