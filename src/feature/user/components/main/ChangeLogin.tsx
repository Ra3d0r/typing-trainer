import {SubmitHandler, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

import {IDataFormChangeLoginUser} from '@types';

import useChangeLogin from '@feature/user/hooks/useChangeLogin';

import ChangeLoginForm from '@components/form/ChangeLoginForm';

import {selectStatusUser} from '../../userSelectors';

const ChangeLogin = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm<IDataFormChangeLoginUser>({mode: 'onBlur'});
	const status = useSelector(selectStatusUser);
	const onSubmit: SubmitHandler<IDataFormChangeLoginUser> = useChangeLogin(reset);
	return (
		<ChangeLoginForm
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			errors={errors}
			isValid={isValid}
			status={status}
		/>
	);
};

export default ChangeLogin;
