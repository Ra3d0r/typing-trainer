import {DataSnapshot} from 'firebase/database';

import {typeModeUnion} from '@types';

import millisecondsToDigitTime from '@helpers/millisecondsToDigitTime';

import Loading from '@components/status/Loading';

const Table = ({
	headers,
	columns,
	mode,
	action,
	loading,
}: {
	headers: string[];
	columns: DataSnapshot[];
	mode: typeModeUnion;
	action: ({id, mode}: {id: string; mode: typeModeUnion}) => void;
	loading?: boolean;
}) => {
	return (
		<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					{headers.map((header) => {
						return (
							<th scope="col" className="px-6 py-3" key={header}>
								{header}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{loading && (
					<tr>
						<td colSpan={headers.length} className="pt-2 h-20">
							<Loading className="flex justify-center" />
						</td>
					</tr>
				)}
				{columns.map((column) => {
					return (
						<tr
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
							key={column.val().id}
						>
							<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
								{column.val()['chars']}
							</td>
							<td className="px-6 py-4 text-center">{column.val()['accuracy'] + '%'}</td>
							<td className="px-6 py-4 text-center">
								{millisecondsToDigitTime(column.val()['time'])}
							</td>
							<td className="px-6 py-4 text-center">{column.val()['typos']}</td>
							<td
								className="px-6 py-4 text-right"
								onClick={() => action({id: column.val().id, mode})}
							>
								<span className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer">
									Remove
								</span>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
