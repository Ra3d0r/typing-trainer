import {useTranslation} from 'react-i18next';

const Pagination = ({
	currentPage,
	totalPages,
	setNextPage,
	setPreviousPage,
	nextEnabled,
	previousEnabled,
}: {
	currentPage: number;
	totalPages: number;
	setNextPage: () => void;
	setPreviousPage: () => void;
	nextEnabled: boolean;
	previousEnabled: boolean;
}) => {
	const {t} = useTranslation('translation');
	return (
		<nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
			<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
				{t('page')}:{' '}
				<span className="font-semibold text-gray-900 dark:text-white">
					{totalPages === 0 ? 0 : currentPage + 1}
				</span>{' '}
				{t('of')} <span className="font-semibold text-gray-900 dark:text-white">{totalPages}</span>
			</span>
			<div className="inline-flex -space-x-px text-sm h-8">
				<button
					onClick={setPreviousPage}
					disabled={!previousEnabled}
					className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg disabled:bg-gray-200 hover:enabled:bg-gray-100 hover:enabled:text-gray-700 dark:disabled:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:enabled:bg-gray-700 dark:hover:enabled:text-white disabled:cursor-default"
				>
					{t('prev')}
				</button>
				<button
					onClick={setNextPage}
					disabled={!nextEnabled}
					className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg disabled:bg-gray-200 hover:enabled:bg-gray-100 hover:enabled:text-gray-700 dark:disabled:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:enabled:bg-gray-700 dark:hover:enabled:text-white disabled:cursor-default"
				>
					{t('next')}
				</button>
			</div>
		</nav>
	);
};

export default Pagination;
