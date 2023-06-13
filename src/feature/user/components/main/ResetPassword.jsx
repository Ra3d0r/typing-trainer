import {useForm} from 'react-hook-form';

import ResetPasswordForm from '../../../../components/form/ResetPasswordForm';
import useResetPassword from '../../hooks/useResetPassword';
import Background from '../item/Background';
import ContainerInner from '../item/ContainerInner';
import Title from '../item/Title';

const ResetPassword = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({mode: 'onBlur'});
	const onSubmit = useResetPassword();
	return (
		<Background>
			<ContainerInner>
				<Title>Resetting a password by mail</Title>
				<ResetPasswordForm
					register={register}
					onSubmit={handleSubmit(onSubmit)}
					errors={errors}
					isValid={isValid}
				/>
			</ContainerInner>
		</Background>
	);
};

export default ResetPassword;
