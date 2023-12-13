import {useAuthState} from 'react-firebase-hooks/auth';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import tw from 'twin.macro';

import {selectLogin} from '@feature/user/userSelectors';

import Loading from '@components/status/Loading';

import {auth} from '../../firebase';

const LoginHTML = ({children, to}: {children: React.ReactNode; to: string}) => {
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
	const {t} = useTranslation('translation');

	if (loading) {
		return <Loading size="sm" />;
	}

	return userName ? (
		<LoginHTML to="/account">{userName}</LoginHTML>
	) : (
		<LoginHTML to="/login">{t('login')}</LoginHTML>
	);
};

export default Login;
