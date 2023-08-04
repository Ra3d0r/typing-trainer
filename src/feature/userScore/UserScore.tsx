import {DataSnapshot} from 'firebase/database';

import {mode} from '@public/data/mode';

import useScoreFireBase from '@hooks/useScoreFireBase';

import setScore from '@helpers/setScore';

import Button from '@components/UI/Button';

import Table from './Table';
import Tabs from './Tabs';

const UserScore = () => {
	const [snapshots, loading, error] = useScoreFireBase('easy');

	if (loading) {
		return <>Loading...</>;
	}
	if (error) {
		return <>Error: {error}</>;
	}

	return (
		<div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Tabs tabs={mode} />
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<Table
					headers={['Total chars', 'Accuracy', 'Time', 'Typos', 'Action']}
					columns={snapshots as DataSnapshot[]}
				/>
			</div>
			<Button
				onClick={() => {
					setScore(
						{
							chars: 30,
							time: 0,
							typos: 12,
							accuracy: 99,
						},
						'easy',
					);
				}}
			>
				Add data
			</Button>
		</div>
	);
};

export default UserScore;
