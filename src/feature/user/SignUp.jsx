import {useForm} from 'react-hook-form';

import Logo from '../../components/UI/Logo';
import RegisterForm from '../../components/form/RegisterForm';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		watch,
	} = useForm({mode: 'onBlur'});
	const onSubmit = (data) => console.log(data);
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Create and account
						</h1>
						<RegisterForm
							onSubmit={handleSubmit(onSubmit)}
							register={register}
							errors={errors}
							isValid={isValid}
							watch={watch}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
