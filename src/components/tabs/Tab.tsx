import capitalizeFirstLetter from '@helpers/capitalizeFirstLetter';

import {ITab} from './types/typeTabs';

const Tab = ({value, active, onClick}: ITab) => {
	if (active) {
		return (
			<li className={`mr-2 inline-block p-4 rounded-t-lg text-blue-400 dark:text-blue-500`}>
				{capitalizeFirstLetter(value)}
			</li>
		);
	}
	return (
		<li
			className={`mr-2 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 hover:cursor-pointer dark:hover:bg-gray-800 dark:hover:text-gray-300`}
			onClick={onClick}
		>
			{capitalizeFirstLetter(value)}
		</li>
	);
};

export default Tab;
