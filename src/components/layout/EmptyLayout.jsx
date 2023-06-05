import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import FlexContainer from './items/FlexContainer';
import Main from './items/Main';
import MainLoading from './items/MainLoading';

const EmptyLayout = () => {
	return (
		<FlexContainer>
			<Main>
				<Suspense fallback={<MainLoading />}>
					<Outlet />
				</Suspense>
			</Main>
		</FlexContainer>
	);
};

export default EmptyLayout;
