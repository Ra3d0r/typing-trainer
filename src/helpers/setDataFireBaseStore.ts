import {ref, set} from 'firebase/database';
import {nanoid} from 'nanoid';

import {auth, db} from '../firebase';

const setDataFireBaseStore = (path: string, subpath?: string) => {
	const currentUser = auth.currentUser;
	const uid = currentUser?.uid;
	if (!uid) {
		return null;
	}

	const id = nanoid();

	let reference = ref(db, `${path}/` + uid + `/${id}`);
	if (subpath) {
		reference = ref(db, `${path}/` + uid + `/${subpath}` + `/${id}`);
	}

	return (data: object) => {
		set(reference, {...data, id});
	};
};

export default setDataFireBaseStore;
