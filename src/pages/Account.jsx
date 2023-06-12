import {Link} from 'react-router-dom';

const Account = () => {
	return (
		<div>
			<h1 className="text-center text-blue-500">Account page</h1>
			<Link className="text-blue-500" to="/">
				Home
			</Link>
		</div>
	);
};

export default Account;
