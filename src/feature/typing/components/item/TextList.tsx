import {ItextList} from '../../types/typesText';
import TextItem from './TextItem';

const TextList = ({currentText, errorsIndex, currentTextIndex}: ItextList) => {
	return (
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
	);
};

export default TextList;
