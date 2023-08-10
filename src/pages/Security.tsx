import Toast from '@feature/toast/Toast';
import ChangeEmail from '@feature/user/components/main/ChangeEmail';
import ChangeLogin from '@feature/user/components/main/ChangeLogin';
import ChangePassword from '@feature/user/components/main/ChangePassword';

const Security = () => {
	return (
		<>
			<Toast />
			<div className="flex justify-center items-center w-full">
				<div className="w-full max-w-2xl h-max my-16 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<ChangeLogin />
					<hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
					<ChangeEmail />
					<hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
					<ChangePassword />
				</div>
			</div>
		</>
	);
};

export default Security;
