import {useState} from 'react';

import {mode} from '@public/data/mode';

import {typeModeUnion} from '@types';

import useScoreFireBase from '@hooks/useScoreFireBase';

import Table from './Table';
import Tabs from './Tabs';
import deleteScore from './deleteScore';

const UserScore = () => {
	const [currentMode, setCurrentMode] = useState<typeModeUnion>(mode.easy);
	const [snapshots, loading, error] = useScoreFireBase(currentMode);

	return (
		<div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Tabs tabs={mode} onClick={setCurrentMode} currentMode={currentMode} />
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<Table
					headers={['Total chars', 'Accuracy', 'Time', 'Typos', 'Action']}
					columns={snapshots}
					mode={currentMode}
					action={deleteScore}
					loading={loading}
					error={error}
				/>
			</div>
		</div>
	);
};

export default UserScore;
