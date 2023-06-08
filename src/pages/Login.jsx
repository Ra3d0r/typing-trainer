import Logo from '../components/UI/Logo';
import SignIn from '../feature/user/components/main/SignIn';
import Container from './Items/Container';
import Section from './Items/Section';

const Login = () => {
	return (
		<Section>
			<Container>
				<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
				<SignIn />;
			</Container>
		</Section>
	);
};

export default Login;
