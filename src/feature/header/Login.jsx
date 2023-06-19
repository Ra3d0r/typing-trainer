import {useAuthState} from 'react-firebase-hooks/auth';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import tw from 'twin.macro';

import Loading from '../../components/status/Loading';
import {auth} from '../../firebase';
import {selectLogin} from '../user/userSlice';

const LoginHTML = ({children, to}) => {
	return (
		<div css={tw`flex items-center`}>
			<Link to={to} css={tw`text-base text-blue-600 dark:text-blue-500 hover:underline`}>
				{children}
			</Link>
		</div>
	);
};

const Login = () => {
	const userName = useSelector(selectLogin);
	const [_, loading] = useAuthState(auth);

	if (loading) {
		return <Loading size="sm" />;
	}

	return userName ? (
		<LoginHTML to="/account">{userName}</LoginHTML>
	) : (
		<LoginHTML to="/login">Login</LoginHTML>
	);
};

export default Login;
