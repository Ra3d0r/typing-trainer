import {useParams} from 'react-router-dom';

import Keyboard from '../feature/keyboard/components/main/Keyboard.jsx';
import Score from '../feature/score/components/main/Score.jsx';
import CustomMode from '../feature/typing/components/main/CustomMode.jsx';
import Text from '../feature/typing/components/main/Text.jsx';

const Game = () => {
	const {mode} = useParams();
	return (
		<>
			{mode === 'custom' && <CustomMode />}
			<Score mode={mode} />
			<Text mode={mode} />
			<Keyboard mode={mode} />
		</>
	);
};

export default Game;
