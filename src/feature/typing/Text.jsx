import {useSelector} from 'react-redux';
import {useParams} from 'react-router';

import {useCurrentText} from '../../hooks/useCurrentText';
import {TextItem} from './TextItem';
import {selectCurrentTextIndex, selectErrorsIndex} from './typingSlice';

const Text = () => {
	const {mode} = useParams();
	const currentText = useCurrentText(mode);
	const errorsIndex = useSelector((state) => selectErrorsIndex(state, mode));
	const currentTextIndex = useSelector((state) => selectCurrentTextIndex(state, mode));

	return (
		<div className="mt-14 w-3/4 flex justify-center m-auto">
			<div className="text-center">
				{currentText?.length ? (
					currentText.map((letter, index) => (
						<TextItem
							key={index}
							letter={letter}
							index={index}
							errorsIndex={errorsIndex}
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
