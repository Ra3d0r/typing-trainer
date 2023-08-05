const Pagination = () => {
	return (
		<nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
			<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
				Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of{' '}
				<span className="font-semibold text-gray-900 dark:text-white">1000</span>
			</span>
			<div className="inline-flex -space-x-px text-sm h-8">
				<button>
					<span className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
						Previous
					</span>
				</button>
				<button>
					<span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
						Next
					</span>
				</button>
			</div>
		</nav>
	);
};

export default Pagination;
