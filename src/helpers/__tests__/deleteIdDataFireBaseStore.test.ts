import {remove} from 'firebase/database';

import {auth} from '../../firebase';
import deleteIdDataFireBaseStore from '../deleteIdDataFireBaseStore';

jest.mock('../../firebase', () => ({
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
	remove: jest.fn(),
}));
jest.mock('firebase/auth');
const mockedRemove = jest.mocked(remove);

describe('deleteIdDataFireBaseStore', () => {
	it('should return function', () => {
		expect(typeof deleteIdDataFireBaseStore('path', 'subpath')).toBe('function');
	});
	it('should remove data', () => {
		deleteIdDataFireBaseStore('path', 'subpath')('id');
		expect(mockedRemove).toHaveBeenCalled();
	});
	it('should throw error', () => {
		jest.replaceProperty(auth, 'currentUser', {
			// @ts-ignore
			uid: null,
		});
		expect(() => deleteIdDataFireBaseStore('path', 'subpath')).toThrowError(
			'User is not logged in',
		);
	});
});
