import {SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

import {IDataFormCreateUser} from '@types';

import RegisterForm from '@components/form/RegisterForm';

import useSingUp from '../../hooks/useSingUp';
import {selectStatusUser} from '../../userSelectors';
import Background from '../item/Background';
import ContainerInner from '../item/ContainerInner';
import Title from '../item/Title';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		watch,
		reset,
	} = useForm<IDataFormCreateUser>({mode: 'onBlur'});
	const {t} = useTranslation('translation');
	const status = useSelector(selectStatusUser);
	const onSubmit: SubmitHandler<IDataFormCreateUser> = useSingUp(reset);
	return (
		<Background>
			<ContainerInner>
				<Title>{t('createAccount')}</Title>
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
