import {useForm} from 'react-hook-form';

import RegisterForm from '../../../../components/form/RegisterForm';
import useSingUp from '../../hooks/useSingUp';
import Background from '../item/Background';
import ContainerInner from '../item/ContainerInner';
import Title from '../item/Title';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		watch,
	} = useForm({mode: 'onBlur'});
	const onSubmit = useSingUp();
	return (
		<Background>
			<ContainerInner>
				<Title>Create account</Title>
				<RegisterForm
					onSubmit={handleSubmit(onSubmit)}
					register={register}
					errors={errors}
					isValid={isValid}
					watch={watch}
				/>
			</ContainerInner>
		</Background>
	);
};

export default SignUp;
