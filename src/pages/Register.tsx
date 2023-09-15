import SignUp from '@feature/user/components/main/SignUp';

import Logo from '@components/UI/Logo';

import Container from './Items/Container';

const Register = () => {
	return (
		<Container>
			<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
			<SignUp />;
		</Container>
	);
};

export default Register;
