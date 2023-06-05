import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import EmptyLayout from './components/layout/EmptyLayout';
import MainLayout from './components/layout/MainLayout';

const HomeAsync = lazy(() => import('./pages/Home'));
const GameAsync = lazy(() => import('./pages/Game'));
const NotFoundAsync = lazy(() => import('./pages/NotFound'));
const LoginAsync = lazy(() => import('./pages/Login'));

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomeAsync />} />
				<Route path="/game/:mode" element={<GameAsync />} />
				<Route path="*" element={<NotFoundAsync />} />
			</Route>
			<Route path="/" element={<EmptyLayout />}>
				<Route path="/login" element={<LoginAsync />} />
			</Route>
		</Routes>
	);
};

export default App;
