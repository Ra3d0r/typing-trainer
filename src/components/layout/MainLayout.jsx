import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import FlexContainer from './items/FlexContainer';
import Main from './items/Main';
import MainLoading from './items/MainLoading';

const Layout = () => {
	return (
		<FlexContainer>
			<Header />
			<Main>
				<Suspense fallback={<MainLoading />}>
					<Outlet />
				</Suspense>
			</Main>
			<Footer />
		</FlexContainer>
	);
};

export default Layout;
