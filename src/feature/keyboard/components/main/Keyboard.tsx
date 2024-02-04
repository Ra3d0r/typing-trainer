import {useTranslation} from 'react-i18next';
import tw from 'twin.macro';

import {typeLang, typeModeUnion} from '@types';

import {selectCurrentLetter, selectPreviousLetter} from '@feature/typing/typingSelectors';

import useKeyboard from '@hooks/useKeyboard';

import keyIdButtons from '@helpers/keyIdButtons';

import {useAppSelector} from '@store/redux-hooks';

import KeyboardList from '../item/KeyboardList';

const KeyboardContainer = ({children}: {children: React.ReactNode}) => {
	return <div css={tw`flex justify-center mt-20`}>{children}</div>;
};

const KeyboardPanel = ({children}: {children: React.ReactNode}) => {
	return (
		<div
			css={tw`inline-block text-center p-2 sm:p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
		>
			{children}
		</div>
	);
};

const Keyboard = ({mode}: {mode: typeModeUnion}) => {
	const {i18n} = useTranslation();
	const currentLetter: string | undefined = useAppSelector((state) =>
		selectCurrentLetter(state, mode),
	);
	const previousLetter = useAppSelector((state) => selectPreviousLetter(state, mode));
	const [isShiftPressed, eventKeyCode] = useKeyboard(currentLetter, mode);
	const currentKeyId = keyIdButtons(currentLetter, i18n.language as typeLang);
	const previousKeyId = keyIdButtons(previousLetter, i18n.language as typeLang);

	return (
		<KeyboardContainer>
			<KeyboardPanel>
				<KeyboardList
					isShiftPressed={isShiftPressed}
					eventKeyCode={eventKeyCode}
					currentKeyId={currentKeyId}
					currentLetter={currentLetter}
					lang={i18n.language as typeLang}
					previousKeyId={previousKeyId || ''}
				/>
			</KeyboardPanel>
		</KeyboardContainer>
	);
};

export default Keyboard;
