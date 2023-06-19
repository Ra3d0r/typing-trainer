import {useSelector} from 'react-redux';
import tw from 'twin.macro';

import Button from '../../../../components/UI/Button';
import Error from '../../../../components/status/Error';
import Loading from '../../../../components/status/Loading';
import useCurrentText from '../../../../hooks/useCurrentText';
import {selectAllInfoText} from '../../typingSlice';
import TextList from '../item/TextList';

const TextContainer = ({children}) => {
	return <div css={tw`mt-14 w-3/4 flex justify-center m-auto`}>{children}</div>;
};

const Text = ({mode}) => {
	const [currentText, setStatusLoadingCustomMode] = useCurrentText(mode);
	const {errorsIndex, currentTextIndex, status, error} = useSelector((state) =>
		selectAllInfoText(state, mode),
	);
	const isTextNullCustomMode = mode == 'custom' && status == 'idle';

	return (
		<TextContainer>
			{isTextNullCustomMode && <Button onClick={setStatusLoadingCustomMode}>Add text</Button>}
			{status === 'loading' && <Loading />}
			{error && <Error message={error} />}
			{status === 'fulfilled' && (
				<TextList
					currentText={currentText}
					errorsIndex={errorsIndex}
					currentTextIndex={currentTextIndex}
				/>
			)}
		</TextContainer>
	);
};

export default Text;
