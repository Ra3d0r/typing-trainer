import {Outlet} from 'react-router-dom';

import {Footer} from './Footer';
import {Header} from './Header';

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen dark:bg-gray-900">
			<Header />
			<main className="container mx-auto overflow-hidden flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export {Layout};
