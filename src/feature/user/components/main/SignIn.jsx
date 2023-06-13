import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

import LoginForm from '../../../../components/form/LoginForm';
import useSingIn from '../../hooks/useSingIn';
import {selectStatusUser} from '../../userSlice';
import Background from '../item/Background';
import ContainerInner from '../item/ContainerInner';
import Title from '../item/Title';

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({mode: 'onBlur'});
	const status = useSelector(selectStatusUser);
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
					status={status}
				/>
			</ContainerInner>
		</Background>
	);
};

export default SignIn;
