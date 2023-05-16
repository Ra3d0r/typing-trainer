import {useSelector} from 'react-redux';

import {Error} from '../../components/status/Error';
import {Loading} from '../../components/status/Loading';
import {useCurrentText} from '../../hooks/useCurrentText';
import {TextItem} from './TextItem';
import {
	selectCurrentTextIndex,
	selectErrorsIndex,
	selectTypingError,
	selectTypingStatus,
} from './typingSlice';

const Text = ({mode}) => {
	const currentText = useCurrentText(mode);
	const errorsIndex = useSelector((state) => selectErrorsIndex(state, mode));
	const currentTextIndex = useSelector((state) => selectCurrentTextIndex(state, mode));
	const status = useSelector((state) => selectTypingStatus(state, mode));
	const error = useSelector((state) => selectTypingError(state, mode));

	return (
		<div className="mt-14 w-3/4 flex justify-center m-auto">
			{status === 'loading' ? <Loading /> : null}
			{error && <Error message={error} />}
			{status === 'fulfilled' && (
				<div className="text-center">
					{currentText.map((letter, index) => (
						<TextItem
							key={index}
							letter={letter}
							index={index}
							errorsIndex={errorsIndex}
							currentTextIndex={currentTextIndex}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export {Text};
