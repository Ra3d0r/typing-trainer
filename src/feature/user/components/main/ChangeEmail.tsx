import {SubmitHandler, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

import {IDataFormChangeEmail} from '@types';

import useChangeEmail from '@feature/user/hooks/useChangeEmail';

import ChangeEmailForm from '@components/form/ChangeEmailForm';

import {selectStatusUser} from '../../userSelectors';

const ChangeEmail = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm<IDataFormChangeEmail>({mode: 'onBlur'});
	const status = useSelector(selectStatusUser);
	const onSubmit: SubmitHandler<IDataFormChangeEmail> = useChangeEmail(reset);
	return (
		<ChangeEmailForm
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			errors={errors}
			isValid={isValid}
			status={status}
		/>
	);
};

export default ChangeEmail;
