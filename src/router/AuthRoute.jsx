import {useAuthState} from 'react-firebase-hooks/auth';
import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

import LoadingFullScreen from '../components/compose/LoadingFullScreen';
import {selectUserAuth} from '../feature/user/userSlice';
import {auth} from '../firebase';

const AuthRoute = () => {
	const isAuthenticated = useSelector(selectUserAuth);
	const [_, loading] = useAuthState(auth);
	if (loading) {
		return <LoadingFullScreen />;
	}
	return isAuthenticated ? <Navigate to="/account" /> : <Outlet />;
};

export default AuthRoute;
