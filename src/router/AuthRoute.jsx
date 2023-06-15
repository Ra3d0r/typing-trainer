import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

import {selectUserAuth} from '../feature/user/userSlice';

const AuthRoute = () => {
	const isAuthenticated = useSelector(selectUserAuth);
	return isAuthenticated ? <Navigate to="/account" /> : <Outlet />;
};

export default AuthRoute;
