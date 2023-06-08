import Checkbox from '../UI/Checkbox';
import LinkForm from '../UI/LinkForm';
import Submit from '../UI/Submit';
import LoginInput from './item/LoginInput';
import PasswordInput from './item/PasswordInput';

const LoginForm = ({onSubmit, register, errors, isValid}) => {
	return (
		<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
			<LoginInput register={register} errors={errors} />
			<PasswordInput register={register} errors={errors} />
			<div className="flex items-center justify-between">
				<Checkbox name="remember" register={register} label={'Remember me'} />
				<LinkForm to={'/forgot-password'}>Forgot password?</LinkForm>
			</div>
			<Submit disabled={!isValid}>Sign in</Submit>
			<p className="text-sm font-light text-gray-500 dark:text-gray-400">
				Don’t have an account yet? <LinkForm to="/register">Sign up</LinkForm>
			</p>
		</form>
	);
};

export default LoginForm;
