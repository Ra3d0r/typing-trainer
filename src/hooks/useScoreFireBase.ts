import {DataSnapshot, orderByChild, query, ref} from 'firebase/database';
import {useList} from 'react-firebase-hooks/database';
import {useSelector} from 'react-redux';

import {typeModeUnion} from '@types';

import {selectIdUser} from '@feature/user/userSelectors';

import {db} from '../firebase';

const useScoreFireBase = (
	mode: typeModeUnion,
): [DataSnapshot[] | undefined, boolean, Error | undefined] => {
	const id = useSelector(selectIdUser);
	const [snapshots, loading, error] = useList(
		query(ref(db, `scores/${id}/${mode}`), orderByChild('createdAt')),
	);
	return [snapshots, loading, error];
};

export default useScoreFireBase;
