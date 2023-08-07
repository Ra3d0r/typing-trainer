import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import Sidebar from '@feature/sidebar/Sidebar';

import LoadingFullScreen from '@components/compose/LoadingFullScreen';

const SidebarLayout = () => {
	return (
		<div className="flex min-h-screen dark:bg-gray-900">
			<div>
				<Sidebar />
			</div>
			<>
				<Suspense fallback={<LoadingFullScreen />}>
					<Outlet />
				</Suspense>
			</>
		</div>
	);
};

export default SidebarLayout;
