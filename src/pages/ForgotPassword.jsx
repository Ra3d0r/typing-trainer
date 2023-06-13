import Logo from '../components/UI/Logo';
import Toast from '../feature/toast/Toast';
import ResetPassword from '../feature/user/components/main/ResetPassword';
import Container from './Items/Container';

const ForgotPassword = () => {
	return (
		<>
			<Toast ms={5000} />
			<Container>
				<Logo cls={`mb-4 text-gray-800 dark:text-white`}>Typing Trainer</Logo>
				<ResetPassword />
			</Container>
		</>
	);
};

export default ForgotPassword;
