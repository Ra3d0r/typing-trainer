import {Suspense, lazy} from 'react';
import {useParams} from 'react-router-dom';

import LoadingFullScreen from 'src/components/compose/LoadingFullScreen';
import {typeModeUnion} from 'src/types/index.js';

import Keyboard from '../feature/keyboard/components/main/Keyboard.jsx';
import Score from '../feature/score/components/main/Score.jsx';
import Toast from '../feature/toast/Toast.jsx';
import Text from '../feature/typing/components/main/Text';

const CustomModeAsync = lazy(() => import('../feature/typing/components/main/CustomMode.jsx'));

const Game = () => {
	const {mode} = useParams<Record<string, typeModeUnion>>();

	if (mode === undefined) {
		return <LoadingFullScreen />;
	}

	return (
		<>
			<Toast />
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
