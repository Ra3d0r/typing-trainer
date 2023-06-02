import {Route, Routes} from 'react-router-dom';

import Layout from './components/layout/Layout';
import Game from './pages/Game';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/game/:mode" element={<Game />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
