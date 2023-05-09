import {Link} from 'react-router-dom';

const GameModeCardItem = ({mode, description, title}) => {
	return (
		<div className="flex flex-col h-60 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<div className="flex-grow">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
			</div>
			<Link
				to={`/game/${mode}`}
				className="inline-flex max-w-max items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Play
				<svg
					data-darkreader-inline-stroke
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					className="w-5 h-5 ml-2 -mr-1"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
					/>
				</svg>
			</Link>
		</div>
	);
};

export {GameModeCardItem};
