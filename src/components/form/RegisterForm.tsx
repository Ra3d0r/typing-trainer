import {useTranslation} from 'react-i18next';

import LinkForm from '@components/UI/LinkForm';
import Submit from '@components/UI/Submit';
import SubmitLoading from '@components/UI/SubmitLoading';
import CheckboxLabel from '@components/compose/CheckboxLabel';

import EmailInput from './item/EmailInput';
import LoginInput from './item/LoginInput';
import PasswordInput from './item/PasswordInput';
import {IPropsRegisterForm} from './types/typeRegisterForm';

const RegisterForm = ({onSubmit, register, errors, isValid, watch, status}: IPropsRegisterForm) => {
	const {t} = useTranslation();
	const matchPassword = (val: string) =>
		watch('password') !== val ? t('twoPasswordNotMatch') : undefined;
	return (
		<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
			<LoginInput register={register} errors={errors} disabled={status === 'loading'} />
			<EmailInput register={register} errors={errors} disabled={status === 'loading'} />
			<PasswordInput register={register} errors={errors} disabled={status === 'loading'} />
			<PasswordInput
				register={register}
				errors={errors}
				name="confirmPassword"
				label={t('confirmPassword')}
				options={{
					validate: matchPassword,
				}}
				disabled={status === 'loading'}
			/>
			<CheckboxLabel
				register={register}
				name="acceptTerms"
				label={t('acceptTerms')}
				link={{to: '/', text: t('termsAndConditions')}}
				options={{
					required: {
						value: true,
						message: t('confirmConditions'),
					},
				}}
			/>
			<CheckboxLabel name="remember" register={register} label={t('rememberMe')} />
			{status === 'loading' ? (
				<SubmitLoading disabled />
			) : (
				<Submit disabled={!isValid}>{t('createAccount')}</Submit>
			)}
			<p className="text-sm font-light text-gray-500 dark:text-gray-400">
				{t('alreadyHaveAccount')} <LinkForm to="/login">{t('signIn')}</LinkForm>
			</p>
		</form>
	);
};

export default RegisterForm;
