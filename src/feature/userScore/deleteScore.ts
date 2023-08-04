import {typeModeUnion} from '@types';

import deleteIdDataFireBaseStore from '@helpers/deleteIdDataFireBaseStore';

const deleteScore = ({mode, id}: {mode: typeModeUnion; id: string}) => {
	const deleteById = deleteIdDataFireBaseStore('scores', mode);
	if (deleteById) {
		deleteById(id);
	}
};

export default deleteScore;
