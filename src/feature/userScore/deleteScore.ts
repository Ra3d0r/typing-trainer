import {typeModeUnion} from '@types';

import deleteIdDataFireBaseStore from '@helpers/deleteIdDataFireBaseStore';

const deleteScore = ({mode, id}: {mode: typeModeUnion; id: string}) => {
	try {
		deleteIdDataFireBaseStore('scores', mode)(id);
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
		} else {
			console.error(err);
		}
	}
};

export default deleteScore;
