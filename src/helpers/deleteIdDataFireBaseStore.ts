import {ref, remove} from 'firebase/database';

import {auth, db} from '../firebase';

const deleteIdDataFireBaseStore = (path: string, subpath?: string) => {
	const uid = auth.currentUser?.uid;
	if (!uid) {
		throw new Error('User is not logged in');
	}

	return (id: string) => {
		const pth = subpath ? `${path}/${uid}/${subpath}/${id}` : `${path}/${uid}/${id}`;
		const reference = ref(db, pth);
		remove(reference);
	};
};

export default deleteIdDataFireBaseStore;
