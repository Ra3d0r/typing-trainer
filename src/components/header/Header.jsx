import {Link} from 'react-router-dom';
import tw from 'twin.macro';

import useHeaderMounted from '../../hooks/useHeaderMounted';

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

const Logo = ({children}) => {
	return (
		<Link to="/" css={tw`flex items-center`}>
			<span
				css={tw`self-center text-2xl text-blue-600 dark:text-blue-500 font-semibold whitespace-nowrap`}
			>
				{children}
			</span>
		</Link>
	);
};

const Login = ({children}) => {
	return (
		<div css={tw`flex items-center`}>
			<Link to={'/login'} css={tw`text-base text-blue-600 dark:text-blue-500 hover:underline`}>
				{children}
			</Link>
		</div>
	);
};

const Header = () => {
	useHeaderMounted();
	return (
		<Nav>
			<FlexContainer>
				<Logo>Typing Trainer</Logo>
				<Login>Login</Login>
			</FlexContainer>
		</Nav>
	);
};

export default Header;
