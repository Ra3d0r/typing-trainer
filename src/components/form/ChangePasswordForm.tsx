import Submit from '@components/UI/Submit';
import SubmitLoading from '@components/UI/SubmitLoading';
import InputLabel from '@components/compose/InputLabel';

import {IPropsChangePasswordForm} from './types/typesChangePasswordForm';

const ChangePasswordForm = ({
	onSubmit,
	register,
	errors,
	isValid,
	status,
}: IPropsChangePasswordForm) => {
	return (
		<form className="flex flex-col" onSubmit={onSubmit}>
			<div className="flex items-end space-x-2">
				<div className="flex-grow">
					<InputLabel
						type="password"
						name="password"
						placeholder="••••••••"
						register={register}
						label={'Change password'}
						options={{
							required: {
								value: true,
								message: 'Fill in this field',
							},
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters',
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
			{errors['password'] && (
				<p className="text-sm text-red-500 dark:text-red-400 mt-2">
					{errors['password'].message as string}
				</p>
			)}
		</form>
	);
};

export default ChangePasswordForm;
