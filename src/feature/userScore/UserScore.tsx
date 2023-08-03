import {mode} from '@public/data/mode';

import {typeModeUnion} from '@types';

import setScore from '@helpers/setScore';

import Button from '@components/UI/Button';

import Table from './Table';
import Tabs from './Tabs';

const UserScore = () => {
	return (
		<div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Tabs tabs={mode as Record<typeModeUnion, typeModeUnion>} />
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<Table
					headers={['Total chars', 'Accuracy', 'Time', 'Typos', 'Action']}
					columns={[{chars: 30, accuracy: 99, time: 0, typos: 12}]}
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
