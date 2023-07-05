import {FieldValues, UseFormRegister} from 'react-hook-form';

import {IDataFormCreateUser, IDataFormLoginUser, IDataFormResetPassword, typeInput} from '@types';

export interface IPropsInputLabel {
	name: typeInput;
	register:
		| UseFormRegister<IDataFormCreateUser>
		| UseFormRegister<IDataFormLoginUser>
		| UseFormRegister<IDataFormResetPassword>;
	options: FieldValues;
	label: string;
	type: string;
	placeholder: string;
}
