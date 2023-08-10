import Toast from '@feature/toast/Toast';
import UserScore from '@feature/userScore/UserScore';

const Account = () => {
	return (
		<>
			<Toast />
			<div className="max-w-screen-xl w-full lg:w-2/4 mx-auto overflow-hidden">
				<UserScore />
			</div>
		</>
	);
};

export default Account;
