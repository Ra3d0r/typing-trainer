import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import LoadingFullScreen from '@components/compose/LoadingFullScreen';

import FlexContainer from './items/FlexContainer';
import Main from './items/Main';

const EmptyLayout = () => {
	return (
		<FlexContainer>
			<Main>
				<Suspense fallback={<LoadingFullScreen />}>
					<Outlet />
				</Suspense>
			</Main>
		</FlexContainer>
	);
};

export default EmptyLayout;
