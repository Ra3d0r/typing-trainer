import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {URL_QUOTES} from '../../config';
import {TextItem} from './TextItem';
import {requestText} from './typingSlice';

const Text = () => {
	const dispatch = useDispatch();
	const selectCurrentText = useSelector((state) => state.typing.entities.easy.currentText);

	useEffect(() => {
		dispatch(requestText(URL_QUOTES)).then(console.log);
	}, [dispatch]);

	return (
		<div className="text-center mt-14">
			{selectCurrentText?.length ? (
				selectCurrentText.map((letter, index) => <TextItem key={index} letter={letter} />)
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};

export {Text};
