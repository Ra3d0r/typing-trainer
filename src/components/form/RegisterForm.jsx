import LinkForm from '../UI/LinkForm';
import Submit from '../UI/Submit';
import SubmitLoading from '../UI/SubmitLoading';
import CheckboxLabel from '../compose/CheckboxLabel';
import EmailInput from './item/EmailInput';
import LoginInput from './item/LoginInput';
import PasswordInput from './item/PasswordInput';

const RegisterForm = ({onSubmit, register, errors, isValid, watch, status}) => {
	const matchPassword = (val) =>
		watch('password') !== val ? 'Your passwords do no match' : undefined;
	return (
		<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
			<LoginInput register={register} errors={errors} disabled={status === 'loading'} />
			<EmailInput register={register} errors={errors} disabled={status === 'loading'} />
			<PasswordInput register={register} errors={errors} disabled={status === 'loading'} />
			<PasswordInput
				register={register}
				errors={errors}
				name="confirmPassword"
				label="Confirm password"
				options={{
					validate: matchPassword,
				}}
				disabled={status === 'loading'}
			/>
			<CheckboxLabel
				register={register}
				errors={errors}
				name="acceptTerms"
				label="I accept the"
				link={{to: '/', text: 'Terms and Conditions'}}
				options={{
					required: {
						value: true,
						message: 'You must accept the terms and conditions',
					},
				}}
			/>
			<CheckboxLabel name="remember" register={register} label={'Remember me'} />
			{status === 'loading' ? (
				<SubmitLoading disabled />
			) : (
				<Submit disabled={!isValid}>Create an account</Submit>
			)}
			<p className="text-sm font-light text-gray-500 dark:text-gray-400">
				Already have an account? <LinkForm to="/login">Login here</LinkForm>
			</p>
		</form>
	);
};

export default RegisterForm;
