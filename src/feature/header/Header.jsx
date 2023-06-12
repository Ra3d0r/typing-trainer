import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import tw from 'twin.macro';

import Logo from '../../components/UI/Logo';
import {selectLogin} from '../user/userSlice';

const Nav = ({children}) => {
	return (
		<nav css={tw`bg-white dark:bg-gray-900 w-full`}>
			<div css={tw`bg-white border-gray-200 dark:bg-gray-900`}>{children}</div>{' '}
		</nav>
	);
};

const FlexContainer = ({children}) => {
	return (
		<div
			css={tw`flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-8 px-4 pb-4`}
		>
			{children}
		</div>
	);
};

const Login = ({children, to}) => {
	return (
		<div css={tw`flex items-center`}>
			<Link to={to} css={tw`text-base text-blue-600 dark:text-blue-500 hover:underline`}>
				{children}
			</Link>
		</div>
	);
};

const Header = () => {
	const login = useSelector(selectLogin);
	return (
		<Nav>
			<FlexContainer>
				<Logo>Typing Trainer</Logo>
				{login ? <Login to="/account">{login}</Login> : <Login to="/login">Login</Login>}
			</FlexContainer>
		</Nav>
	);
};

export default Header;
