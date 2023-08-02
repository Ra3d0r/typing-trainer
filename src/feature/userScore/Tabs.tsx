import {useState} from 'react';

import {typeModeUnion} from '@types';

import Tab from './Tab';
import {ITabs} from './types/typeTabs';

const Tabs = ({tabs}: ITabs) => {
	const [list, setList] = useState(
		(Object.keys(tabs) as typeModeUnion[]).map((key) => {
			return {
				key,
				value: tabs[key],
				active: false,
			};
		}),
	);
	const handleClick = (key: typeModeUnion) => {
		setList((prev) => {
			return prev.map((item) => {
				if (item.key === key) {
					return {
						...item,
						active: !item.active,
					};
				}
				return {
					...item,
					active: false,
				};
			});
		});
	};
	return (
		<ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
			{list.map((item) => {
				return (
					<Tab
						key={item.key}
						value={item.value}
						active={item.active}
						onClick={() => handleClick(item.key)}
					/>
				);
			})}
		</ul>
	);
};

export default Tabs;
