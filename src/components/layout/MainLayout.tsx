import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import Header from '@feature/header/Header';

import LoadingFullScreen from '@components/compose/LoadingFullScreen';
import Footer from '@components/footer/Footer';

import FlexContainer from './items/FlexContainer';
import Main from './items/Main';

const Layout = () => {
	return (
		<FlexContainer>
			<Header />
			<Main>
				<Suspense fallback={<LoadingFullScreen />}>
					<Outlet />
				</Suspense>
			</Main>
			<Footer />
		</FlexContainer>
	);
};

export default Layout;
