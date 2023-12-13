import {useTranslation} from 'react-i18next';

import LinkForm from '@components/UI/LinkForm';
import Submit from '@components/UI/Submit';
import SubmitLoading from '@components/UI/SubmitLoading';
import CheckboxLabel from '@components/compose/CheckboxLabel';

import EmailInput from './item/EmailInput';
import PasswordInput from './item/PasswordInput';
import {IPropsLoginForm} from './types/typesLoginForm';

const LoginForm = ({onSubmit, register, errors, isValid, status}: IPropsLoginForm) => {
	const {t} = useTranslation('translation');
	return (
		<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
			<EmailInput register={register} errors={errors} disabled={status === 'loading'} />
			<PasswordInput register={register} errors={errors} disabled={status === 'loading'} />
			<div className="flex items-center justify-between">
				<CheckboxLabel name="remember" register={register} label={t('rememberMe')} />
				<LinkForm to={'/forgot-password'}>{t('forgotPassword')}</LinkForm>
			</div>
			{status === 'loading' ? (
				<SubmitLoading disabled />
			) : (
				<Submit disabled={!isValid}>{t('signIn')}</Submit>
			)}
			<p className="text-sm font-light text-gray-500 dark:text-gray-400">
				{t('notHaveAccount')} <LinkForm to="/register">{t('register')}</LinkForm>
			</p>
		</form>
	);
};

export default LoginForm;
