import {classNameLetter} from './classNameLetter';

const TextItem = ({letter, index, errorIndex, currentTextIndex}) => {
	const className = classNameLetter(index, errorIndex, currentTextIndex);
	return <span className={className}>{letter}</span>;
};

export {TextItem};
