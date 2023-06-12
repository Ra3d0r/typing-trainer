import InputLabel from '../../compose/InputLabel';

const EmailInput = ({register, errors, options, ...other}) => {
	return (
		<div>
			<InputLabel
				type="email"
				name="email"
				placeholder="name@company.com"
				register={register}
				label={'Email'}
				options={{
					required: {
						value: true,
						message: 'Fill in this field',
					},
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'Invalid email address',
					},
					...options,
				}}
				{...other}
			/>
			{errors.email && (
				<p className="text-sm text-red-500 dark:text-red-400 mt-2">{errors.email.message}</p>
			)}
		</div>
	);
};

export default EmailInput;
