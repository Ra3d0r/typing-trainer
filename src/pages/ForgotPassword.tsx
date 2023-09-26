import ResetPassword from '@feature/user/components/main/ResetPassword';

import Logo from '@components/UI/Logo';

import Container from './Items/Container';

const ForgotPassword = () => {
	return (
		<Container>
			<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
			<ResetPassword />
		</Container>
	);
};

export default ForgotPassword;
