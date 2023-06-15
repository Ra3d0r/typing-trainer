import {Link} from 'react-router-dom';

import Button from '../components/UI/Button';
import Toast from '../feature/toast/Toast';
import useSingOut from '../feature/user/hooks/useSingOut';

const Account = () => {
	const singOut = useSingOut();
	return (
		<div>
			<Toast />
			<h1 className="text-center text-blue-500">Account page</h1>
			<Link className="text-blue-500" to="/">
				Home
			</Link>
			<Button onClick={singOut} text={'Sign out'}></Button>
		</div>
	);
};

export default Account;
