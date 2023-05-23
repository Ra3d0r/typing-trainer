import {useSelector} from 'react-redux';
import tw from 'twin.macro';

import {buttonsKeyboard} from '../../../public/data/buttonsKeyboard';
import {keyIdButtons} from '../../helpers/keyIdButtons';
import {useKeyboard} from '../../hooks/useKeyboard';
import {selectCurrentLetter} from '../typing/typingSlice';
import {KeyboardKey} from './KeyboardKey';

const KeyboardContainer = ({children}) => {
	return <div css={tw`flex justify-center mt-20`}>{children}</div>;
};

const KeyboardPanel = ({children}) => {
	return (
		<div
			css={tw`inline-block text-center p-2 sm:p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
		>
			{children}
		</div>
	);
};

const Keyboard = ({mode}) => {
	const currentLetter = useSelector((state) => selectCurrentLetter(state, mode));
	const [isShiftPressed, eventKeyCode] = useKeyboard(currentLetter, mode);
	const currentKeyId = keyIdButtons(currentLetter);

	return (
		<KeyboardContainer>
			<KeyboardPanel>
				{buttonsKeyboard.map((board, rowIndex) => {
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
									/>
								);
							})}
						</div>
					);
				})}
			</KeyboardPanel>
		</KeyboardContainer>
	);
};

export {Keyboard};
