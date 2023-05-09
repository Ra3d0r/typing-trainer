import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<nav className="bg-white dark:bg-gray-900 w-full">
			<div className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-8 px-4 pb-4">
					<Link to="/" className="flex items-center">
						<span className="self-center text-2xl text-blue-600 dark:text-blue-500 font-semibold whitespace-nowrap">
							Typing Trainer
						</span>
					</Link>
					<div className="flex items-center">
						<a href="#" className="text-base text-blue-600 dark:text-blue-500 hover:underline">
							Login
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export {Header};
