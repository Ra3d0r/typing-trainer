import Logo from '../components/UI/Logo';
import SignIn from '../feature/user/components/main/SignIn';
import Container from './Items/Container';

const Login = () => {
	return (
		<Container>
			<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
			<SignIn />;
		</Container>
	);
};

export default Login;
