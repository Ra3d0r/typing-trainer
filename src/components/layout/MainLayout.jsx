import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import Header from '../../feature/header/Header';
import Footer from '../footer/Footer';
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
