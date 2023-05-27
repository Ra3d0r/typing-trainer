import {classNameLetter} from '../../helpers/classNameLetter';

const TextItem = ({letter, index, errorsIndex, currentTextIndex}) => {
	const className = classNameLetter(index, errorsIndex, currentTextIndex);
	return <span className={className}>{letter}</span>;
};

export {TextItem};
