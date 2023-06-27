import classNameLetter from '@feature/typing/helpers/classNameLetter';
import {ItextItem} from '@feature/typing/types/typesText';

const TextItem = ({letter, index, errorsIndex, currentTextIndex}: ItextItem) => {
	const className = classNameLetter(index, errorsIndex, currentTextIndex);
	return <span className={className}>{letter}</span>;
};

export default TextItem;
