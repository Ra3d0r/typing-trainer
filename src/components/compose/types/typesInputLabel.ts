import {FieldValues, UseFormRegister} from 'react-hook-form';

import {
	IDataFormChangeLoginUser,
	IDataFormCreateUser,
	IDataFormLoginUser,
	IDataFormResetPassword,
	typeInput,
} from '@types';

export interface IPropsInputLabel {
	name: typeInput;
	register:
		| UseFormRegister<IDataFormCreateUser>
		| UseFormRegister<IDataFormLoginUser>
		| UseFormRegister<IDataFormResetPassword>
		| UseFormRegister<IDataFormChangeLoginUser>;
	options: FieldValues;
	label: string;
	type: string;
	placeholder: string;
}
