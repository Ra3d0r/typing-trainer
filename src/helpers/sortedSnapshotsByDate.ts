import {DataSnapshot} from 'firebase/database';

const sortedSnapshotsByDate = (array: DataSnapshot[] | undefined) => {
	if (array === undefined) {
		return undefined;
	}
	if (array.length === 0) {
		return [];
	}
	return array.sort((a, b) => {
		return new Date(b.val()['createdAt']).getTime() - new Date(a.val()['createdAt']).getTime();
	});
};

export default sortedSnapshotsByDate;
