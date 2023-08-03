import {typeModeUnion} from '@types';

import setDataFireBaseStore from './setDataFireBaseStore';

const setScore = (
	score: {chars: number; time: number; typos: number; accuracy: number},
	mode: typeModeUnion,
) => {
	const setData = setDataFireBaseStore(`scores`, mode);
	if (setData) {
		setData(score);
	}
};

export default setScore;
