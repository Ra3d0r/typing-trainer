import {FieldValues, UseFormRegister} from 'react-hook-form';

import {IDataFormCreateUser, IDataFormLoginUser, IDataFormResetPassword, typeInput} from '@types';

export interface IPropsInput {
	name: typeInput;
	register:
		| UseFormRegister<IDataFormCreateUser>
		| UseFormRegister<IDataFormLoginUser>
		| UseFormRegister<IDataFormResetPassword>;
	options: FieldValues | undefined;
}
