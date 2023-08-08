import {SubmitHandler, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

import {IDataFormChangePassword} from '@types';

import useChangePassword from '@feature/user/hooks/useChangePassword';

import ChangePasswordForm from '@components/form/ChangePasswordForm';

import {selectStatusUser} from '../../userSelectors';

const ChangePassword = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm<IDataFormChangePassword>({mode: 'onBlur'});
	const status = useSelector(selectStatusUser);
	const onSubmit: SubmitHandler<IDataFormChangePassword> = useChangePassword(reset);
	return (
		<ChangePasswordForm
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			errors={errors}
			isValid={isValid}
			status={status}
		/>
	);
};

export default ChangePassword;
