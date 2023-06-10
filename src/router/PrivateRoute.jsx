import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

import {selectUserAuth} from '../feature/user/userSlice';

const PrivateRoute = () => {
	const isAuthenticated = useSelector(selectUserAuth);
	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
