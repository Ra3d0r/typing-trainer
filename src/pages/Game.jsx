import {useParams} from 'react-router-dom';

import {Keyboard} from '../feature/keyboard/Keyboard.jsx';
import {Score} from '../feature/score/Score.jsx';
import {CustomMode} from '../feature/typing/CustomMode.jsx';
import {Text} from '../feature/typing/Text.jsx';

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

export {Game};
