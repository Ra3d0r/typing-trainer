import ChangeLogin from '@feature/user/components/main/ChangeLogin';

const Security = () => {
	return (
		<div className="w-2/5 mx-auto my-16 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<ChangeLogin />
			<hr className="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700" />
		</div>
	);
};

export default Security;
