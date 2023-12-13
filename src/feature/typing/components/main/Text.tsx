import {useTranslation} from 'react-i18next';
import tw from 'twin.macro';

import {typeModeUnion} from '@types';

import {selectAllInfoText} from '@feature/typing/typingSelectors';

import useCurrentText from '@hooks/useCurrentText';

import {useAppSelector} from '@store/redux-hooks';

import Button from '@components/UI/Button';
import Error from '@components/status/Error';
import Loading from '@components/status/Loading';

import TextList from '../item/TextList';

const TextContainer = ({children}: {children: React.ReactNode}) => {
	return <div css={tw`mt-14 w-3/4 flex justify-center m-auto`}>{children}</div>;
};

const Text = ({mode}: {mode: typeModeUnion}) => {
	const [currentText, setStatusLoadingCustomMode] = useCurrentText(mode);
	const {errorsIndex, currentTextIndex, status, error} = useAppSelector((state) =>
		selectAllInfoText(state, mode),
	);
	const {t} = useTranslation('translation');
	const isTextNullCustomMode = mode == 'custom' && status == 'idle';
	const isTextReady = status === 'fulfilled' && Array.isArray(currentText);

	return (
		<TextContainer>
			{isTextNullCustomMode && <Button onClick={setStatusLoadingCustomMode}>{t('addText')}</Button>}
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
