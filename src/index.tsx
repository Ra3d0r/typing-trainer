import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import App from './App';
import './css/index.css';
import './i18n';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
);
