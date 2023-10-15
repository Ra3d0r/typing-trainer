import {Provider} from 'react-redux';
import {AnyAction, Store} from 'redux';

import {createReduxStore} from './helper/createReduxStore';

// eslint-disable-next-line
function createReduxWrapper(store?: Store<any, AnyAction>) {
	const defaultStore = createReduxStore();
	return {
		wrapper: ({children}: {children?: React.ReactNode}) => (
			<Provider store={store || defaultStore}>{children}</Provider>
		),
		store: store || defaultStore,
	};
}

export default createReduxWrapper;
