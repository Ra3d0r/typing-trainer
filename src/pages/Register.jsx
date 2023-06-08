import Logo from '../components/UI/Logo';
import SignUp from '../feature/user/components/main/SignUp';
import Container from './Items/Container';
import Section from './Items/Section';

const Register = () => {
	return (
		<Section>
			<Container>
				<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
				<SignUp />;
			</Container>
		</Section>
	);
};

export default Register;
