import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import SidebarLayout from '@components/layout/SidebarLayout';

import EmptyLayout from './components/layout/EmptyLayout';
import MainLayout from './components/layout/MainLayout';
import useDisablePreloader from './hooks/useDisablePreloader';
import useSubscribeAuthState from './hooks/useSubscribeAuthState';
import AuthRoute from './router/AuthRoute';
import PrivateRoute from './router/PrivateRoute';

const HomeAsync = lazy(() => import('./pages/Home'));
const GameAsync = lazy(() => import('./pages/Game'));
const NotFoundAsync = lazy(() => import('./pages/NotFound'));
const LoginAsync = lazy(() => import('./pages/Login'));
const RegisterAsync = lazy(() => import('./pages/Register'));
const AccountAsync = lazy(() => import('./pages/Account'));
const ForgotPasswordAsync = lazy(() => import('./pages/ForgotPassword'));

const App = () => {
	useDisablePreloader();
	useSubscribeAuthState();
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomeAsync />} />
				<Route path="/game/:mode" element={<GameAsync />} />
			</Route>
			<Route path="/" element={<EmptyLayout />}>
				<Route element={<AuthRoute />}>
					<Route path="/login" element={<LoginAsync />} />
					<Route path="/register" element={<RegisterAsync />} />
					<Route path="/forgot-password" element={<ForgotPasswordAsync />} />
				</Route>
			</Route>
			<Route path="/account" element={<SidebarLayout />}>
				<Route element={<PrivateRoute />}>
					<Route index element={<AccountAsync />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFoundAsync />} />
		</Routes>
	);
};

export default App;
