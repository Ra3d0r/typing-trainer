import {FieldErrors, UseFormRegister} from 'react-hook-form';

import {IDataFormResetPassword, typeStatusUser} from '@types';

export interface IPropsResetForm {
	onSubmit: () => void;
	register: UseFormRegister<IDataFormResetPassword>;
	isValid: boolean;
	status: typeStatusUser;
	errors: FieldErrors<IDataFormResetPassword>;
}
