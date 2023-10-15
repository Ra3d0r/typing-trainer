import Toast from '@feature/toast/Toast';

import useDisablePreloader from '@hooks/useDisablePreloader';
import useSubscribeAuthState from '@hooks/useSubscribeAuthState';

import AppRouter from './router/AppRouter';

const App = () => {
	useDisablePreloader();
	useSubscribeAuthState();
	return (
		<>
			<Toast />
			<AppRouter />
		</>
	);
};

export default App;
