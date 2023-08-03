import {ref, set} from 'firebase/database';
import {nanoid} from 'nanoid';

import {auth, db} from '../firebase';

const setDataFireBaseStore = (path: string, subpath?: string) => {
	const currentUser = auth.currentUser;
	const uid = currentUser?.uid;
	if (!uid) {
		return null;
	}

	let reference = ref(db, `${path}/` + uid + `/${nanoid()}`);
	if (subpath) {
		reference = ref(db, `${path}/` + uid + `/${subpath}` + `/${nanoid()}`);
	}

	return (data: object) => {
		set(reference, data);
	};
};

export default setDataFireBaseStore;
