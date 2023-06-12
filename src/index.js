import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import App from './App';
import './css/index.css';
import './firebase';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
);
