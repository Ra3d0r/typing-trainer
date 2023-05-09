import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Game} from './pages/Game';
import {NotFound} from './pages/NotFound';
import {Layout} from './components/Layout';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/game" element={<Game />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
