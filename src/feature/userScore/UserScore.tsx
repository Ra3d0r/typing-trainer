import {mode} from '@public/data/mode';

import {typeModeUnion} from '@types';

import setScore from '@helpers/setScore';

import Button from '@components/UI/Button';

import Tabs from './Tabs';

const UserScore = () => {
	return (
		<div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Tabs tabs={mode as Record<typeModeUnion, typeModeUnion>} />
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Total chars
							</th>
							<th scope="col" className="px-6 py-3">
								Accuracy
							</th>
							<th scope="col" className="px-6 py-3">
								Time
							</th>
							<th scope="col" className="px-6 py-3">
								Typos
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
								30
							</td>
							<td className="px-6 py-4 text-center">99%</td>
							<td className="px-6 py-4 text-center">0:45</td>
							<td className="px-6 py-4 text-center">12</td>
							<td className="px-6 py-4 text-right">
								<span className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer">
									Remove
								</span>
							</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
								30
							</td>
							<td className="px-6 py-4 text-center">99%</td>
							<td className="px-6 py-4 text-center">0:45</td>
							<td className="px-6 py-4 text-center">12</td>
							<td className="px-6 py-4 text-right">
								<span className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer">
									Remove
								</span>
							</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
								30
							</td>
							<td className="px-6 py-4 text-center">99%</td>
							<td className="px-6 py-4 text-center">0:45</td>
							<td className="px-6 py-4 text-center">12</td>
							<td className="px-6 py-4 text-right">
								<span className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer">
									Remove
								</span>
							</td>
						</tr>
					</tbody>
				</table>
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
