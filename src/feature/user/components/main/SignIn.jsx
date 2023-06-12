import {useForm} from 'react-hook-form';

import LoginForm from '../../../../components/form/LoginForm';
import useSingIn from '../../hooks/useSingIn';
import Background from '../item/Background';
import ContainerInner from '../item/ContainerInner';
import Title from '../item/Title';

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({mode: 'onBlur'});
	const onSubmit = useSingIn();
	return (
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
	);
};

export default SignIn;
