import Submit from '@components/UI/Submit';
import SubmitLoading from '@components/UI/SubmitLoading';
import InputLabel from '@components/compose/InputLabel';

import {IPropsChangeEmailForm} from './types/typesChangEmailForm';

const ChangeLoginForm = ({onSubmit, register, errors, isValid, status}: IPropsChangeEmailForm) => {
	return (
		<form className="flex flex-col" onSubmit={onSubmit}>
			<div className="flex items-end space-x-2">
				<div className="flex-grow">
					<InputLabel
						type="email"
						name="email"
						placeholder="name@company.com"
						register={register}
						label={'Change email'}
						options={{
							required: {
								value: true,
								message: 'Fill in this field',
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						}}
					/>
				</div>
				{status === 'loading' ? (
					<SubmitLoading disabled className="h-full w-min" />
				) : (
					<Submit disabled={!isValid} className="h-full w-min">
						Submit
					</Submit>
				)}
			</div>
			{errors['email'] && (
				<p className="text-sm text-red-500 dark:text-red-400 mt-2">
					{errors['email'].message as string}
				</p>
			)}
		</form>
	);
};

export default ChangeLoginForm;
