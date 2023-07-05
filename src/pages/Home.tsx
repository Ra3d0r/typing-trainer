import tw from 'twin.macro';

import GameModeCard from '../components/card/GameModeCard';
import Toast from '../feature/toast/Toast';

const Title = ({children}: {children: React.ReactNode}) => {
	return (
		<h1
			css={tw`mb-20 mt-20 text-center text-4xl font-extrabold sm:leading-3 md:leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}
		>
			{children}
		</h1>
	);
};

const Mark = ({children}: {children: React.ReactNode}) => {
	return <mark css={tw`px-2 text-white bg-blue-600 rounded dark:bg-blue-500`}>{children}</mark>;
};

const Home = () => {
	return (
		<>
			<Toast ms={2000} />
			<Title>
				Choose a&nbsp;<Mark>game</Mark>&nbsp;mode
			</Title>

			<GameModeCard />
		</>
	);
};

export default Home;
