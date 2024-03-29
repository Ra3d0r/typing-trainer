import {SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

import {IDataFormLoginUser} from '@types';

import LoginForm from '@components/form/LoginForm';

import useSingIn from '../../hooks/useSingIn';
import {selectStatusUser} from '../../userSelectors';
import Background from '../item/Background';
import ContainerInner from '../item/ContainerInner';
import Title from '../item/Title';

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm<IDataFormLoginUser>({mode: 'onBlur'});
	const {t} = useTranslation('translation');
	const status = useSelector(selectStatusUser);
	const onSubmit: SubmitHandler<IDataFormLoginUser> = useSingIn(reset);
	return (
		<Background>
			<ContainerInner>
				<Title>{t('titleSignIn')}</Title>
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
