import {gameModeInfo} from '@public/data/gameModeInfo';

import {typeLang} from '@types';

import GameModeCardItem from './GameModeCardItem';

const GameModeCard = ({language, buttonText}: {language: typeLang; buttonText: string}) => {
	return (
		<div className="flex flex-wrap gap-5 justify-center">
			{gameModeInfo[language].map((mode) => (
				<GameModeCardItem key={mode.id} {...mode} buttonText={buttonText} />
			))}
		</div>
	);
};

export default GameModeCard;
