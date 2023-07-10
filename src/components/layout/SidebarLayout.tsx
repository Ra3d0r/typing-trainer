import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import LoadingFullScreen from '@components/compose/LoadingFullScreen';
import Sidebar from '@components/sidebar/Sidebar';

const SidebarLayout = () => {
	return (
		<div className="flex min-h-screen dark:bg-gray-900">
			<div>
				<Sidebar />
			</div>
			<div>
				<Suspense fallback={<LoadingFullScreen />}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
};

export default SidebarLayout;
