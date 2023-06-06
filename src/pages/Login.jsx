import {useForm} from 'react-hook-form';

import Checkbox from '../components/UI/Checkbox';
import Input from '../components/UI/Input';
import Logo from '../components/UI/Logo';
import Submit from '../components/UI/Submit';

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<Logo cls={`mb-4`}>Typing Trainer</Logo>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in to your account
						</h1>
						<form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
							<div>
								<Input
									type="email"
									name="email"
									placeholder="name@company.com"
									register={register}
									required
									label={'Email'}
								/>
							</div>
							<div>
								<Input
									type="password"
									name="password"
									placeholder="••••••••"
									register={register}
									required
									label={'Password'}
								/>
							</div>
							<div className="flex items-center justify-between">
								<Checkbox id="remember" name="remember" register={register} label={'Remember me'} />
								<a
									href="#"
									className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Forgot password?
								</a>
							</div>
							<Submit>Sign in</Submit>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Don’t have an account yet?{' '}
								<a
									href="#"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Sign up
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
