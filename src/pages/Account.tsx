import Toast from '@feature/toast/Toast';
import UserScore from '@feature/userScore/UserScore';

const Account = () => {
	return (
		<>
			<Toast />
			<div className="max-w-screen-xl w-2/4 mx-auto">
				<UserScore />
			</div>
		</>
	);
};

export default Account;
