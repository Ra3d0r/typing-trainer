import {Link} from 'react-router-dom';

import Toast from '@feature/toast/Toast';

import useSingOut from '@hooks/useSingOut';

import Button from '@components/UI/Button';

const Account = () => {
	const singOut = useSingOut();
	return (
		<>
			<Toast />
			<Link className="text-blue-500" to="/">
				Home
			</Link>
			<Button onClick={singOut}>Sign out</Button>
		</>
	);
};

export default Account;
