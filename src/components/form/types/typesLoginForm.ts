import {FieldErrors, UseFormRegister} from 'react-hook-form';

import {IDataFormLoginUser, typeStatusUser} from '@types';

export interface IPropsLoginForm {
	onSubmit: () => void;
	register: UseFormRegister<IDataFormLoginUser>;
	isValid: boolean;
	status: typeStatusUser;
	errors: FieldErrors<IDataFormLoginUser>;
}
