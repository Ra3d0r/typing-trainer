import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import tw from 'twin.macro';

import Loading from '../status/Loading';
import Footer from './Footer';
import Header from './Header';

const FlexContainer = ({children}) => {
	return <div css={tw`flex flex-col min-h-screen dark:bg-gray-900`}>{children}</div>;
};

const Main = ({children}) => {
	return <div css={tw`container mx-auto overflow-hidden grow`}>{children}</div>;
};

const MainLoading = () => {
	return <div css={tw`flex justify-center items-center h-screen`}>{<Loading />}</div>;
};

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
