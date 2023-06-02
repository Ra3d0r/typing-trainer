import GameModeCard from '../components/card/GameModeCard';

const Home = () => {
	return (
		<>
			<h1 className="mb-20 mt-20 text-center text-4xl font-extrabold sm:leading-3 md:leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
				Choose a&nbsp;
				<mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">game</mark>
				&nbsp;mode
			</h1>

			<GameModeCard />
		</>
	);
};

export default Home;
