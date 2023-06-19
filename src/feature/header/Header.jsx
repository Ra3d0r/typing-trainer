import tw from 'twin.macro';

import Logo from '../../components/UI/Logo';
import Login from './Login';

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

const Header = () => {
	return (
		<Nav>
			<FlexContainer>
				<Logo>Typing Trainer</Logo>
				<Login />
			</FlexContainer>
		</Nav>
	);
};

export default Header;
