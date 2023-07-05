import {FieldValues, UseFormRegister} from 'react-hook-form';

import {
	IDataFormCreateUser,
	IDataFormLoginUser,
	IDataFormResetPassword,
	typeCheckbox,
} from '@types';

export interface IPropsCheckbox {
	name: typeCheckbox;
	register:
		| UseFormRegister<IDataFormCreateUser>
		| UseFormRegister<IDataFormLoginUser>
		| UseFormRegister<IDataFormResetPassword>;
	options: FieldValues | undefined;
}
