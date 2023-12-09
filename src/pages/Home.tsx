import {Trans, useTranslation} from 'react-i18next';
import tw from 'twin.macro';

import {typeLang} from '@types';

import GameModeCard from '../components/card/GameModeCard';

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
	const {t, i18n} = useTranslation([]);
	return (
		<>
			<Title>
				<Trans t={t}>
					Choose a <Mark>game</Mark> mode
				</Trans>
			</Title>

			<GameModeCard language={i18n.language as typeLang} buttonText={t('playButton')} />
		</>
	);
};

export default Home;
