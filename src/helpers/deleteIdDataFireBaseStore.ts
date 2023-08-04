import {ref, remove} from 'firebase/database';

import {auth, db} from '../firebase';

const deleteIdDataFireBaseStore = (path: string, subpath?: string) => {
	const currentUser = auth.currentUser;
	const uid = currentUser?.uid;
	if (!uid) {
		return null;
	}

	return (id: string) => {
		const pth = subpath ? `${path}/${uid}/${subpath}/${id}` : `${path}/${uid}/${id}`;
		const reference = ref(db, pth);
		remove(reference);
	};
};

export default deleteIdDataFireBaseStore;
