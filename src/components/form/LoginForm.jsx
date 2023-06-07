import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import LinkForm from '../UI/LinkForm';
import Submit from '../UI/Submit';

const LoginForm = ({onSubmit, register, errors, isValid}) => {
	return (
		<form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmit}>
			<div>
				<Input
					type="email"
					name="email"
					placeholder="name@company.com"
					register={register}
					required={'Fill in this field'}
					label={'Email'}
					pattern={{
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'Invalid email address',
					}}
				/>
				{errors.email && (
					<p className="text-sm text-red-500 dark:text-red-400 mt-2">{errors.email.message}</p>
				)}
			</div>
			<div>
				<Input
					type="password"
					name="password"
					placeholder="••••••••"
					register={register}
					required={'Fill in this field'}
					label={'Password'}
				/>
				{errors.password && (
					<p className="text-sm text-red-500 dark:text-red-400 mt-2">{errors.password.message}</p>
				)}
			</div>
			<div className="flex items-center justify-between">
				<Checkbox id="remember" name="remember" register={register} label={'Remember me'} />
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
