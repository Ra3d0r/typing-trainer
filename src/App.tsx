import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import EmptyLayout from './components/layout/EmptyLayout';
import MainLayout from './components/layout/MainLayout';
import useComponentMounted from './hooks/useComponentMounted';
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
	useComponentMounted();
	useSubscribeAuthState();
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomeAsync />} />
				<Route path="/game/:mode" element={<GameAsync />} />
			</Route>
			<Route path="/" element={<EmptyLayout />}>
				<Route path="*" element={<NotFoundAsync />} />
				<Route element={<AuthRoute />}>
					<Route path="/login" element={<LoginAsync />} />
					<Route path="/register" element={<RegisterAsync />} />
					<Route path="/forgot-password" element={<ForgotPasswordAsync />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path="/account" element={<AccountAsync />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;