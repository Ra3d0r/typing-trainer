import {typeModeUnion} from '@types';

import setDataFireBaseStore from './setDataFireBaseStore';

interface IScore {
	chars: number;
	time: number;
	typos: number;
	accuracy: number;
}

const setScore = (score: IScore, mode: typeModeUnion) => {
	try {
		setDataFireBaseStore(`scores`, mode)(score);
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
		} else {
			console.error(err);
		}
	}
};

export default setScore;
