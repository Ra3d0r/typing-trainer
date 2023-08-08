import {FieldValues, UseFormRegister} from 'react-hook-form';

import {
	IDataFormChangeEmail,
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
		| UseFormRegister<IDataFormChangeLoginUser>
		| UseFormRegister<IDataFormChangeEmail>;
	options: FieldValues;
	label: string;
	type: string;
	placeholder: string;
}
