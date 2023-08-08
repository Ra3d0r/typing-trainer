import {FieldErrors, UseFormRegister} from 'react-hook-form';

import {IDataFormChangeLoginUser, typeStatusUser} from '@types';

export interface IPropsChangeLoginForm {
	onSubmit: () => void;
	register: UseFormRegister<IDataFormChangeLoginUser>;
	isValid: boolean;
	status: typeStatusUser;
	errors: FieldErrors<IDataFormChangeLoginUser>;
}
