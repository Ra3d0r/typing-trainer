import classNameLetter from '../../helpers/classNameLetter';
import { ItextItem } from '../../types/typesText';



const TextItem = ({letter, index, errorsIndex, currentTextIndex}: ItextItem) => {
	const className = classNameLetter(index, errorsIndex, currentTextIndex);
	return <span className={className}>{letter}</span>;
};

export default TextItem;
