import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import AppRouter from '../router/AppRouter';
import {createReduxStore, typeInitialState} from './helper/createReduxStore';

jest.mock('../firebase', () => ({
	__esModule: true,
	auth: {
		currentUser: {
			uid: 'uid',
		},
	},
	db: jest.fn(),
}));
jest.mock('firebase/database', () => ({
	ref: jest.fn(),
	set: jest.fn(),
}));
jest.mock('firebase/auth');

jest.mock('react-firebase-hooks/auth', () => {
	return {
		useAuthState: jest.fn().mockReturnValue([{}, false]),
	};
});

const renderTestApp = (
	component: JSX.Element | null,
	option: {initRoute?: string; initStore?: typeInitialState},
) => {
	const store = createReduxStore(option?.initStore);
	return render(
		<MemoryRouter initialEntries={[option?.initRoute || '/']}>
			<Provider store={store}>
				<AppRouter />
				{component}
			</Provider>
		</MemoryRouter>,
	);
};

export default renderTestApp;
