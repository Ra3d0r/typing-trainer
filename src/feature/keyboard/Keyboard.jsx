import {buttonsKeyboard} from '../../../public/data/buttonsKeyboard';
import {useKeyboard} from '../../hooks/useKeyboard';
import {KeyboardKey} from './KeyboardKey';

const Keyboard = () => {
	const [isShift, eventKeyCode, keyTarget] = useKeyboard('KeyT');

	return (
		<div className="flex justify-center mt-20">
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
										eventKey={eventKeyCode}
										keyTarget={keyTarget}
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
