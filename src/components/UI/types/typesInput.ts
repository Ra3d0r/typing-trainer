import {FieldValues, UseFormRegister} from 'react-hook-form';

import {
	IDataFormChangeLoginUser,
	IDataFormChangePassword,
	IDataFormCreateUser,
	IDataFormLoginUser,
	IDataFormResetPassword,
	typeInput,
} from '@types';

export interface IPropsInput {
	name: typeInput;
	register:
		| UseFormRegister<IDataFormCreateUser>
		| UseFormRegister<IDataFormLoginUser>
		| UseFormRegister<IDataFormResetPassword>
		| UseFormRegister<IDataFormChangeLoginUser>
		| UseFormRegister<IDataFormChangeLoginUser>
		| UseFormRegister<IDataFormChangePassword>;
	options: FieldValues | undefined;
}
