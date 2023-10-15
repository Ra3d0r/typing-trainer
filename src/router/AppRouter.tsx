import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import EmptyLayout from '@components/layout/EmptyLayout';
import MainLayout from '@components/layout/MainLayout';
import SidebarLayout from '@components/layout/SidebarLayout';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

const HomeAsync = lazy(() => import('@pages/Home'));
const GameAsync = lazy(() => import('@pages/Game'));
const NotFoundAsync = lazy(() => import('@pages/NotFound'));
const LoginAsync = lazy(() => import('@pages/Login'));
const RegisterAsync = lazy(() => import('@pages/Register'));
const AccountAsync = lazy(() => import('@pages/Account'));
const ForgotPasswordAsync = lazy(() => import('@pages/ForgotPassword'));
const SecurityAsync = lazy(() => import('@pages/Security'));

const AppRouter = () => {
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
					<Route path="security" element={<SecurityAsync />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFoundAsync />} />
		</Routes>
	);
};

export default AppRouter;
