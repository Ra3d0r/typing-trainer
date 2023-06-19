import TextItem from './TextItem';

const TextList = ({currentText, errorsIndex, currentTextIndex}) => {
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
