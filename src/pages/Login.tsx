import Toast from '@feature/toast/Toast';
import SignIn from '@feature/user/components/main/SignIn';

import Logo from '@components/UI/Logo';

import Container from './Items/Container';

const Login = () => {
	return (
		<>
			<Toast ms={4000} />
			<Container>
				<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
				<SignIn />;
			</Container>
		</>
	);
};

export default Login;
