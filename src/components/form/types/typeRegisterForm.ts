import {FieldErrors, UseFormRegister, UseFormWatch} from 'react-hook-form';

import {IDataFormCreateUser, typeStatusUser} from '@types';

export interface IPropsRegisterForm {
	onSubmit: () => void;
	register: UseFormRegister<IDataFormCreateUser>;
	isValid: boolean;
	status: typeStatusUser;
	errors: FieldErrors<IDataFormCreateUser>;
	watch: UseFormWatch<IDataFormCreateUser>;
}
