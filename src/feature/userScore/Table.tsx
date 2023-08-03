const Table = ({headers, columns}: {headers: string[]; columns: Record<string, number>[]}) => {
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
				{columns.map((column, index) => {
					return (
						<tr
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
							key={index}
						>
							<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
								{column['chars']}
							</td>
							<td className="px-6 py-4 text-center">{column['accuracy']}</td>
							<td className="px-6 py-4 text-center">{column['time']}</td>
							<td className="px-6 py-4 text-center">{column['typos']}</td>
							<td className="px-6 py-4 text-right">
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