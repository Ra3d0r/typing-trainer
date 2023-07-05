import InputLabel from '@components/compose/InputLabel';

import {IPropsInput} from '../types/typesInput';

const PasswordInput = ({register, errors, options, ...other}: IPropsInput) => {
	const name = other?.name;
	return (
		<div>
			<InputLabel
				type="password"
				name="password"
				placeholder="••••••••"
				register={register}
				label={'Password'}
				options={{
					required: {
						value: true,
						message: 'Fill in this field',
					},
					minLength: {
						value: 6,
						message: 'Password must be at least 6 characters',
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
