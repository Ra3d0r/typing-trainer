import InputLabel from '@components/compose/InputLabel';

import {IPropsInput} from '../types/typesInput';

const LoginInput = ({register, errors, options, divClassName, ...other}: IPropsInput) => {
	return (
		<div className={divClassName}>
			<InputLabel
				type="text"
				name="login"
				placeholder="username"
				register={register}
				label={'Login'}
				options={{
					required: {
						value: true,
						message: 'Fill in this field',
					},
					minLength: {
						value: 3,
						message: 'Login must be at least 3 characters',
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
