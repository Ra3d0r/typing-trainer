import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {usePagination} from 'react-use-pagination';

import {mode} from '@public/data/mode';

import {typeModeUnion} from '@types';

import useScoreFireBase from '@hooks/useScoreFireBase';

import Pagination from '@components/pagination/Pagination';
import Table from '@components/tables/TableScore';
import Tabs from '@components/tabs/Tabs';

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
	const {t} = useTranslation('translation');

	return (
		<div className="w-full h-[720px] my-16 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Tabs tabs={mode} onClick={setCurrentMode} currentMode={currentMode} />
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<Table
					headers={[
						t('dateOfPlay'),
						t('totalChars'),
						t('accuracy'),
						t('time'),
						t('typos'),
						t('correctness'),
						t('lang'),
						t('action'),
					]}
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
