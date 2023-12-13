import {useTranslation} from 'react-i18next';

import Submit from '@components/UI/Submit';
import SubmitLoading from '@components/UI/SubmitLoading';

import EmailInput from './item/EmailInput';
import {IPropsResetForm} from './types/typesResetForm';

const ResetPasswordForm = ({onSubmit, register, errors, isValid, status}: IPropsResetForm) => {
	const {t} = useTranslation('translation');
	return (
		<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
			<p className="text-sm font-light text-gray-500 dark:text-gray-400">{t('enterEmail')}</p>
			<EmailInput register={register} errors={errors} disabled={status === 'loading'} />
			{status === 'loading' ? (
				<SubmitLoading disabled />
			) : (
				<Submit disabled={!isValid}>{t('resetPassword')}</Submit>
			)}
		</form>
	);
};

export default ResetPasswordForm;
