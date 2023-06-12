import Submit from '../UI/Submit';
import EmailInput from './item/EmailInput';

const ResetPasswordForm = ({onSubmit, register, errors, isValid}) => {
	return (
		<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
			<p className="text-sm font-light text-gray-500 dark:text-gray-400">
				Enter your account email
			</p>
			<EmailInput register={register} errors={errors} />
			<Submit disabled={!isValid}>Reset password</Submit>
		</form>
	);
};

export default ResetPasswordForm;
