import {gameModeInfo} from '@public/data/gameModeInfo';

import GameModeCardItem from './GameModeCardItem';

const GameModeCard = () => {
	return (
		<div className="flex flex-wrap gap-5 justify-center">
			{gameModeInfo.map((mode) => (
				<GameModeCardItem key={mode.id} {...mode} />
			))}
		</div>
	);
};

export default GameModeCard;
