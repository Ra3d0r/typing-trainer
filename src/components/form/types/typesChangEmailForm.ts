import {FieldErrors, UseFormRegister} from 'react-hook-form';

import {IDataFormChangeEmail, typeStatusUser} from '@types';

export interface IPropsChangeEmailForm {
	onSubmit: () => void;
	register: UseFormRegister<IDataFormChangeEmail>;
	isValid: boolean;
	status: typeStatusUser;
	errors: FieldErrors<IDataFormChangeEmail>;
}
