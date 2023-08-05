import {nanoid} from '@reduxjs/toolkit';
import {ref, set} from 'firebase/database';

import {auth, db} from '../firebase';

const setDataFireBaseStore = (path: string, subpath?: string) => {
	const uid = auth.currentUser?.uid;
	if (!uid) {
		throw new Error('User is not logged in');
	}

	const id = nanoid();
	const pth = subpath ? `${path}/${uid}/${subpath}/${id}` : `${path}/${uid}/${id}`;

	const reference = ref(db, pth);

	return (data: object) => {
		set(reference, {
			...data,
			id,
			createdAt: new Date().toLocaleDateString([], {
				month: 'short',
				day: 'numeric',
				year: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
			}),
		});
	};
};

export default setDataFireBaseStore;
