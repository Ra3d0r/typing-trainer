import {useTranslation} from 'react-i18next';

import InputLabel from '@components/compose/InputLabel';

import {IPropsInput} from '../types/typesInput';

const LoginInput = ({register, errors, options, divClassName, ...other}: IPropsInput) => {
	const {t} = useTranslation('translation');
	return (
		<div className={divClassName}>
			<InputLabel
				type="text"
				name="login"
				placeholder="username"
				register={register}
				label={t('login')}
				options={{
					required: {
						value: true,
						message: t('fillFields'),
					},
					minLength: {
						value: 3,
						message: t('loginLength'),
					},
					...options,
				}}
				{...other}
			/>
			{errors['login'] && (
				<p className="text-sm text-red-500 dark:text-red-400 mt-2">
					{errors['login'].message as string}
				</p>
			)}
		</div>
	);
};

export default LoginInput;
