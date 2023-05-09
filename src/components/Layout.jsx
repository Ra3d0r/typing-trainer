import {Link, Outlet} from 'react-router-dom';
import {Header} from './Header';
import {Footer} from './Footer';

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="container mx-auto overflow-hidden flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export {Layout};
