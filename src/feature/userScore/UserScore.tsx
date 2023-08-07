import {useState} from 'react';
import {usePagination} from 'react-use-pagination';

import {mode} from '@public/data/mode';

import {typeModeUnion} from '@types';

import useScoreFireBase from '@hooks/useScoreFireBase';

import Pagination from './Pagination';
import Table from './Table';
import Tabs from './Tabs';
import deleteScore from './deleteScore';

const UserScore = () => {
	const [currentMode, setCurrentMode] = useState<typeModeUnion>(mode.easy);
	const [snapshots, loading, error] = useScoreFireBase(currentMode);
	const {
		currentPage,
		totalPages,
		setNextPage,
		setPreviousPage,
		nextEnabled,
		previousEnabled,
		startIndex,
		endIndex,
	} = usePagination({totalItems: snapshots?.length ?? 0, initialPageSize: 10});

	return (
		<div className="w-full my-16 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Tabs tabs={mode} onClick={setCurrentMode} currentMode={currentMode} />
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<Table
					headers={['Date of play', 'Total chars', 'Accuracy', 'Time', 'Typos', 'Action']}
					columns={snapshots?.slice(startIndex, endIndex + 1)}
					mode={currentMode}
					action={deleteScore}
					loading={loading}
					error={error}
				/>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				setNextPage={setNextPage}
				setPreviousPage={setPreviousPage}
				nextEnabled={nextEnabled}
				previousEnabled={previousEnabled}
			/>
		</div>
	);
};

export default UserScore;
