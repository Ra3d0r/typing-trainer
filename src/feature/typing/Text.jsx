import {useCurrentText} from '../../hooks/useCurrentText';
import {TextItem} from './TextItem';

const Text = () => {
	const currentText = useCurrentText();

	return (
		<div className="text-center mt-14">
			{currentText?.length ? (
				currentText.map((letter, index) => <TextItem key={index} letter={letter} />)
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};

export {Text};
