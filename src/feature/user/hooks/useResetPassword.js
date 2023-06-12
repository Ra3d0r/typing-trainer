import resetPassword from '../auth/resetPassword';

const useResetPassword = () => {
	return (data) => resetPassword(data);
};

export default useResetPassword;
