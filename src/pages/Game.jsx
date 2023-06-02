import {Suspense, lazy} from 'react';
import {useParams} from 'react-router-dom';

import Keyboard from '../feature/keyboard/components/main/Keyboard.jsx';
import Score from '../feature/score/components/main/Score.jsx';
import Text from '../feature/typing/components/main/Text.jsx';

const CustomModeAsync = lazy(() => import('../feature/typing/components/main/CustomMode.jsx'));

const Game = () => {
	const {mode} = useParams();
	return (
		<>
			{mode === 'custom' && (
				<Suspense>
					<CustomModeAsync />
				</Suspense>
			)}
			<Score mode={mode} />
			<Text mode={mode} />
			<Keyboard mode={mode} />
		</>
	);
};

export default Game;
