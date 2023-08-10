import {FieldErrors, UseFormRegister} from 'react-hook-form';

import {IDataFormChangePassword, typeStatusUser} from '@types';

export interface IPropsChangePasswordForm {
	onSubmit: () => void;
	register: UseFormRegister<IDataFormChangePassword>;
	isValid: boolean;
	status: typeStatusUser;
	errors: FieldErrors<IDataFormChangePassword>;
}
