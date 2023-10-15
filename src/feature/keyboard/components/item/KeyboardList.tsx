import {buttonsKeyboard} from '@public/data/buttonsKeyboard';

import KeyboardKey from './KeyboardKey';

interface props {
	isShiftPressed: boolean;
	eventKeyCode: string;
	currentKeyId: string | null;
	currentLetter: string | undefined;
}

const KeyboardList = ({isShiftPressed, eventKeyCode, currentKeyId, currentLetter}: props) => {
	return buttonsKeyboard.map((board, rowIndex) => {
		return (
			<div key={rowIndex} className="space-x-0.5 space-y-0.5 flex grow">
				{board.map((key) => {
					return (
						<KeyboardKey
							key={key.id}
							{...key}
							kbd={isShiftPressed ? key.shift : key.nonShift}
							eventKey={eventKeyCode}
							keyTarget={currentKeyId}
							currentLetter={currentLetter}
						/>
					);
				})}
			</div>
		);
	});
};

export default KeyboardList;
