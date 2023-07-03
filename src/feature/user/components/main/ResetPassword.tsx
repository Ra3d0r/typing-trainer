import {SubmitHandler, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

import ResetPasswordForm from '@components/form/ResetPasswordForm';

import useResetPassword from '../../hooks/useResetPassword';
import {IDataFormResetPassword} from '../../types/typesResetPassword';
import {selectStatusUser} from '../../userSelectors';
import Background from '../item/Background';
import ContainerInner from '../item/ContainerInner';
import Title from '../item/Title';

const ResetPassword = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm<IDataFormResetPassword>({mode: 'onBlur'});
	const onSubmit: SubmitHandler<IDataFormResetPassword> = useResetPassword(reset);
	const status = useSelector(selectStatusUser);
	return (
		<Background>
			<ContainerInner>
				<Title>Resetting a password by mail</Title>
				<ResetPasswordForm
					register={register}
					onSubmit={handleSubmit(onSubmit)}
					errors={errors}
					isValid={isValid}
					status={status}
				/>
			</ContainerInner>
		</Background>
	);
};

export default ResetPassword;
