import Toast from '@feature/toast/Toast';

import useDisablePreloader from '@hooks/useDisablePreloader';
import useSelectedLang from '@hooks/useSelectedLang';
import useSubscribeAuthState from '@hooks/useSubscribeAuthState';

import AppRouter from './router/AppRouter';

const App = () => {
	useDisablePreloader();
	useSubscribeAuthState();
	useSelectedLang();
	return (
		<>
			<Toast />
			<AppRouter />
		</>
	);
};

export default App;
