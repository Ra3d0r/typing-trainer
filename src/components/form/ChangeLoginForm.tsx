import {useTranslation} from 'react-i18next';

import Submit from '@components/UI/Submit';
import SubmitLoading from '@components/UI/SubmitLoading';
import InputLabel from '@components/compose/InputLabel';

import {IPropsChangeLoginForm} from './types/typesChangeLoginForm';

const ChangeLoginForm = ({onSubmit, register, errors, isValid, status}: IPropsChangeLoginForm) => {
	const {t} = useTranslation('translation');
	return (
		<form className="flex flex-col" onSubmit={onSubmit}>
			<div className="flex items-end space-x-2">
				<div className="flex-grow">
					<InputLabel
						type="text"
						name="login"
						placeholder="username"
						register={register}
						label={t('changeLogin')}
						options={{
							required: {
								value: true,
								message: t('fillFields'),
							},
							minLength: {
								value: 3,
								message: t('loginLength'),
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
			{errors['login'] && (
				<p className="text-sm text-red-500 dark:text-red-400 mt-2">
					{errors['login'].message as string}
				</p>
			)}
		</form>
	);
};

export default ChangeLoginForm;
