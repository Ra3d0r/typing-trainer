import {useState} from 'react';

import {gameModeInfo} from '../../data/gameModeInfo';
import {GameModeCardItem} from './GameModeCardItem';

const GameModeCard = () => {
	const [gameMode, setGameMode] = useState(['easy', 'normal', 'hard', 'custom']);
	return (
		<div className="flex flex-wrap gap-5 justify-center">
			{gameModeInfo.map((mode) => (
				<GameModeCardItem key={mode.id} {...mode} />
			))}
		</div>
	);
};

export {GameModeCard};
