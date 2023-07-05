import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';

import {IDataFormCreateUser, IDataFormLoginUser, IDataFormResetPassword, typeInput} from '@types';

export interface IPropsInput {
	register:
		| UseFormRegister<IDataFormCreateUser>
		| UseFormRegister<IDataFormLoginUser>
		| UseFormRegister<IDataFormResetPassword>;
	options?: FieldValues;
	errors: FieldErrors<FieldValues>;
	name?: typeInput;
	disabled?: boolean;
	label?: string;
}
