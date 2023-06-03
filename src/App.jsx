import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import Layout from './components/layout/Layout';

const HomeAsync = lazy(() => import('./pages/Home'));
const GameAsync = lazy(() => import('./pages/Game'));
const NotFoundAsync = lazy(() => import('./pages/NotFound'));

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomeAsync />} />
				<Route path="/game/:mode" element={<GameAsync />} />
				<Route path="*" element={<NotFoundAsync />} />
			</Route>
		</Routes>
	);
};

export default App;
