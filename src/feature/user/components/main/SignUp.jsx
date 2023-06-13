import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

import RegisterForm from '../../../../components/form/RegisterForm';
import useSingUp from '../../hooks/useSingUp';
import {selectStatusUser} from '../../userSlice';
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
	const status = useSelector(selectStatusUser);
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
					status={status}
				/>
			</ContainerInner>
		</Background>
	);
};

export default SignUp;
