import {nanoid} from '@reduxjs/toolkit';
import {set} from 'firebase/database';

import {auth} from '../../firebase';
import setDataFireBaseStore from '../utils/setDataFireBaseStore';

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
	set: jest.fn(),
}));
jest.mock('firebase/auth');
jest.mock('@reduxjs/toolkit');
const mockedSet = jest.mocked(set);
const mockedNanoid = jest.mocked(nanoid);

describe('setDataFireBaseStore', () => {
	it('should return function and called nanoid', () => {
		expect(typeof setDataFireBaseStore('path', 'subpath')).toBe('function');
		expect(mockedNanoid).toHaveBeenCalled();
	});
	it('should set data and called nanoid', () => {
		setDataFireBaseStore('path', 'subpath')({id: 'id'});
		expect(mockedNanoid).toHaveBeenCalled();
		expect(mockedSet).toHaveBeenCalled();
	});
	it('should throw error', () => {
		jest.replaceProperty(auth, 'currentUser', {
			// @ts-ignore
			uid: null,
		});
		expect(() => setDataFireBaseStore('path', 'subpath')).toThrowError('User is not logged in');
	});
});
