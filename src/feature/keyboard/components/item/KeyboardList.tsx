import {buttonsKeyboard, buttonsKeyboardRU} from '@public/data/buttonsKeyboard';

import {typeLang} from '@types';

import KeyboardKey from './KeyboardKey';

interface props {
	isShiftPressed: boolean;
	eventKeyCode: string;
	currentKeyId: string | null;
	currentLetter: string | undefined;
	lang: typeLang;
	previousKeyId: string;
}

const handleKeyBoard = (lang: typeLang) => (lang === 'en' ? buttonsKeyboard : buttonsKeyboardRU);

const KeyboardList = ({
	isShiftPressed,
	eventKeyCode,
	currentKeyId,
	currentLetter,
	lang,
	previousKeyId,
}: props) => {
	return handleKeyBoard(lang).map((board, rowIndex) => {
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
							previousKeyId={previousKeyId}
						/>
					);
				})}
			</div>
		);
	});
};

export default KeyboardList;
