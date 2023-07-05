import Submit from '@components/UI/Submit';
import SubmitLoading from '@components/UI/SubmitLoading';

import EmailInput from './item/EmailInput';
import {IPropsResetForm} from './types/typesResetForm';

const ResetPasswordForm = ({onSubmit, register, errors, isValid, status}: IPropsResetForm) => {
	return (
		<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
			<p className="text-sm font-light text-gray-500 dark:text-gray-400">
				Enter your account email
			</p>
			<EmailInput register={register} errors={errors} disabled={status === 'loading'} />
			{status === 'loading' ? (
				<SubmitLoading disabled />
			) : (
				<Submit disabled={!isValid}>Reset password</Submit>
			)}
		</form>
	);
};

export default ResetPasswordForm;
