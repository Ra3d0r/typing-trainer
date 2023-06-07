import {useForm} from 'react-hook-form';
import tw from 'twin.macro';

import Logo from '../../components/UI/Logo';
import LoginForm from '../../components/form/LoginForm';

const Section = ({children}) => {
	return <section css={tw`bg-gray-50 dark:bg-gray-900`}>{children}</section>;
};

const Container = ({children}) => {
	return (
		<div css={tw`flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`}>
			{children}
		</div>
	);
};

const Background = ({children}) => {
	return (
		<div
			css={tw`w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
		>
			{children}
		</div>
	);
};

const ContainerInner = ({children}) => {
	return <div css={tw`p-6 space-y-4 md:space-y-6 sm:p-8`}>{children}</div>;
};

const Title = ({children}) => {
	return (
		<h1
			css={tw`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white`}
		>
			{children}
		</h1>
	);
};

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({mode: 'onBlur'});
	const onSubmit = (data) => console.log(data);
	return (
		<Section>
			<Container>
				<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
				<Background>
					<ContainerInner>
						<Title>Sign in to your account</Title>
						<LoginForm
							onSubmit={handleSubmit(onSubmit)}
							register={register}
							errors={errors}
							isValid={isValid}
						/>
					</ContainerInner>
				</Background>
			</Container>
		</Section>
	);
};

export default SignIn;
