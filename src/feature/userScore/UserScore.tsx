import {DataSnapshot} from 'firebase/database';
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

	if (loading) {
		return <>Loading...</>;
	}
	if (error) {
		return <>Error: {error}</>;
	}

	return (
		<div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Tabs tabs={mode} onClick={setCurrentMode} currentMode={currentMode} />
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<Table
					headers={['Total chars', 'Accuracy', 'Time', 'Typos', 'Action']}
					columns={snapshots as DataSnapshot[]}
					mode={currentMode}
					action={deleteScore}
				/>
			</div>
		</div>
	);
};

export default UserScore;
