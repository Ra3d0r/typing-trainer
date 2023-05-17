import {useParams} from 'react-router-dom';

import {Keyboard} from '../feature/keyboard/Keyboard.jsx';
import {Text} from '../feature/typing/Text.jsx';

const Game = () => {
	const {mode} = useParams();
	return (
		<>
			<Text mode={mode} />
			<Keyboard mode={mode} />
		</>
	);
};

export {Game};
