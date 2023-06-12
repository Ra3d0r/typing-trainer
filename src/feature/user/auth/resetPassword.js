import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

const resetPassword = ({email}) => {
	const auth = getAuth();
	sendPasswordResetEmail(auth, email)
		.then(() => {
			// Password reset email sent!
			// ..
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
};

export default resetPassword;
