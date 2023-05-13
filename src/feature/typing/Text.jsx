import {useSelector} from 'react-redux';

import {useCurrentText} from '../../hooks/useCurrentText';
import {TextItem} from './TextItem';

const Text = () => {
	const currentText = useCurrentText();
	const errorIndex = useSelector((state) => state.typing.entities.easy.errorIndex);
	const currentTextIndex = useSelector((state) => state.typing.entities.easy.currentTextIndex);

	return (
		<div className="mt-14 w-3/4 flex justify-center m-auto">
			<div className="text-center">
				{currentText?.length ? (
					currentText.map((letter, index) => (
						<TextItem
							key={index}
							letter={letter}
							index={index}
							errorIndex={errorIndex}
							currentTextIndex={currentTextIndex}
						/>
					))
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</div>
	);
};

export {Text};
