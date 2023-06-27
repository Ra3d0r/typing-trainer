import tw from 'twin.macro';

import Button from '../../../../components/UI/Button';
import Error from '../../../../components/status/Error';
import Loading from '../../../../components/status/Loading';
import useCurrentText from '../../../../hooks/useCurrentText';
import {selectAllInfoText} from '../../typingSelectors';
import TextList from '../item/TextList';
import { typeModeUnion } from 'src/types';


import { useAppSelector } from '@/store/redux-hooks';


const TextContainer = ({children}: {children: React.ReactNode}) => {
	return <div css={tw`mt-14 w-3/4 flex justify-center m-auto`}>{children}</div>;
};


const Text = ({mode}: {mode: typeModeUnion}) => {
	const [currentText, setStatusLoadingCustomMode] = useCurrentText(mode);
	const {errorsIndex, currentTextIndex, status, error} = useAppSelector((state) =>
		selectAllInfoText(state, mode),
	);
	const isTextNullCustomMode = mode == 'custom' && status == 'idle';
	const isTextReady = status === 'fulfilled' && Array.isArray(currentText);

	return (
		<TextContainer>
			{isTextNullCustomMode && <Button onClick={setStatusLoadingCustomMode}>Add text</Button>}
			{status === 'loading' && <Loading />}
			{error && <Error message={error} />}
			{isTextReady && (
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
