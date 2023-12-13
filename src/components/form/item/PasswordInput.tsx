import {useTranslation} from 'react-i18next';

import InputLabel from '@components/compose/InputLabel';

import {IPropsInput} from '../types/typesInput';

const PasswordInput = ({register, errors, options, ...other}: IPropsInput) => {
	const {t} = useTranslation('translation');
	const name = other?.name;
	return (
		<div>
			<InputLabel
				type="password"
				name="password"
				placeholder="••••••••"
				register={register}
				label={t('password')}
				options={{
					required: {
						value: true,
						message: t('fillFields'),
					},
					minLength: {
						value: 6,
						message: t('passwordLength'),
					},
					...options,
				}}
				{...other}
			/>
			{errors[name || 'password'] && (
				<p className="text-sm text-red-500 dark:text-red-400 mt-2">
					{errors[name || 'password']?.message as string}
				</p>
			)}
		</div>
	);
};

export default PasswordInput;
