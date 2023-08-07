import {DataSnapshot} from 'firebase/database';

const sortedSnapshotsByDate = (array: DataSnapshot[] | undefined) => {
	if (array === undefined) {
		return undefined;
	}
	if (array.length === 0) {
		return [];
	}
	return array.sort((a, b) => {
		return b.val()['createdAt'] - a.val()['createdAt'];
	});
};

export default sortedSnapshotsByDate;
