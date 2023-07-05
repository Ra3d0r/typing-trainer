import {useAuthState} from 'react-firebase-hooks/auth';
import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

import LoadingFullScreen from '../components/compose/LoadingFullScreen';
import {selectUserAuth} from '../feature/user/userSelectors';
import {auth} from '../firebase';

const PrivateRoute = () => {
	const isAuthenticated = useSelector(selectUserAuth);
	const [_, loading] = useAuthState(auth);
	if (loading) {
		return <LoadingFullScreen />;
	}
	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
