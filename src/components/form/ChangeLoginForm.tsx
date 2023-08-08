import Submit from '@components/UI/Submit';
import SubmitLoading from '@components/UI/SubmitLoading';
import InputLabel from '@components/compose/InputLabel';

import {IPropsChangeLoginForm} from './types/typesChangeLoginForm';

const ChangeLoginForm = ({onSubmit, register, errors, isValid, status}: IPropsChangeLoginForm) => {
	return (
		<form className="flex flex-col" onSubmit={onSubmit}>
			<div className="flex items-end space-x-2">
				<div className="w-full">
					<InputLabel
						type="text"
						name="login"
						placeholder="username"
						register={register}
						label={'Change login'}
						options={{
							required: {
								value: true,
								message: 'Fill in this field',
							},
							minLength: {
								value: 3,
								message: 'Login must be at least 3 characters',
							},
						}}
					/>
				</div>
				{status === 'loading' ? (
					<SubmitLoading disabled className="w-2/12 h-full" />
				) : (
					<Submit disabled={!isValid} className="w-2/12 h-full">
						Submit
					</Submit>
				)}
			</div>
			{errors['login'] && (
				<p className="text-sm text-red-500 dark:text-red-400 mt-2">
					{errors['login'].message as string}
				</p>
			)}
		</form>
	);
};

export default ChangeLoginForm;
