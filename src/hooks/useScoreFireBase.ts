import {ref} from 'firebase/database';
import {useList} from 'react-firebase-hooks/database';
import {useSelector} from 'react-redux';

import {typeModeUnion} from '@types';

import {selectIdUser} from '@feature/user/userSelectors';

import {db} from '../firebase';

const useScoreFireBase = (mode: typeModeUnion) => {
	const id = useSelector(selectIdUser);
	const [snapshots, loading, error] = useList(ref(db, `scores/${id}/${mode}`));
	return [snapshots, loading, error];
};

export default useScoreFireBase;
