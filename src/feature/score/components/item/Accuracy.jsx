import {useAccuracy} from '../../../../hooks/useAccuracy';

const Accuracy = ({mode}) => {
	const accuracy = useAccuracy(mode);
	return (
		<div>
			<p>Accuracy: {accuracy}%</p>
		</div>
	);
};

export {Accuracy};
