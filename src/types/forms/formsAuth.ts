export interface IDataFormCreateUser {
	login: string;
	password: string;
	email: string;
	remember: boolean;
}

export interface IDataFormLoginUser {
	password: string;
	email: string;
	remember: boolean;
}

export interface IDataFormResetPassword {
	email: string;
}

export type typeInput = 'email' | 'password' | 'login' | 'confirmPassword';
export type typeCheckbox = 'remember' | 'acceptTerms';
