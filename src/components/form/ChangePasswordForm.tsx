import {useTranslation} from 'react-i18next';

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
	const {t} = useTranslation('translation');
	return (
		<form className="flex flex-col" onSubmit={onSubmit}>
			<div className="flex items-end space-x-2">
				<div className="flex-grow">
					<InputLabel
						type="password"
						name="password"
						placeholder="••••••••"
						register={register}
						label={t('changePassword')}
						options={{
							required: {
								value: true,
								message: t('fillFields'),
							},
							minLength: {
								value: 6,
								message: t('passwordLength'),
							},
						}}
					/>
				</div>
				{status === 'loading' ? (
					<SubmitLoading disabled className="h-full w-min" />
				) : (
					<Submit disabled={!isValid} className="h-full w-min">
						{t('submit')}
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
