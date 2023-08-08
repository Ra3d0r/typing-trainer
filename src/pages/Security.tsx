import Toast from '@feature/toast/Toast';
import ChangeEmail from '@feature/user/components/main/ChangeEmail';
import ChangeLogin from '@feature/user/components/main/ChangeLogin';

const Security = () => {
	return (
		<>
			<Toast />
			<div className="w-full max-w-2xl mx-auto my-16 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<ChangeLogin />
				<hr className="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700" />
				<ChangeEmail />
			</div>
		</>
	);
};

export default Security;
