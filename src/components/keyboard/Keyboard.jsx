import {buttonsKeyboard} from '../../data/buttonsKeyboard';

import {KeyboardKey} from './KeyboardKey';
import {useKeyboard} from '../../hooks/useKeyboard';

const Keyboard = () => {
	const [isShift, eventKeyCode] = useKeyboard();

	return (
		<div className="flex justify-center">
			<div className="inline-block text-center p-2 sm:p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				{buttonsKeyboard.map((board, rowIndex) => {
					return (
						<div key={rowIndex} className="space-x-0.5 space-y-0.5 flex grow">
							{board.map((key) => {
								return (
									<KeyboardKey
										key={key.id}
										{...key}
										kbd={isShift ? key.shift : key.nonShift}
										className={eventKeyCode === key.id ? 'key-button-active' : 'key-button'}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export {Keyboard};
