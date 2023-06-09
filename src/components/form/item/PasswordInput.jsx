import InputLabel from '../../compose/InputLabel';

const PasswordInput = ({register, errors, options, ...other}) => {
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
						value: 3,
						message: 'Password must be at least 3 characters',
					},
					...options,
				}}
				{...other}
			/>
			{errors[name || 'password'] && (
				<p className="text-sm text-red-500 dark:text-red-400 mt-2">
					{errors[name || 'password'].message}
				</p>
			)}
		</div>
	);
};

export default PasswordInput;
