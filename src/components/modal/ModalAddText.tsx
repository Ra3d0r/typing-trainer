import tw from 'twin.macro';

import Button from '@components/UI/Button';
import Cross from '@components/UI/Cross';
import TextArea from '@components/UI/TextArea';

import {IPropSModalAddText} from './types/typesModalAddText';

const Window = ({children}: {children: React.ReactNode}) => {
	return (
		<div
			css={tw`fixed top-0 left-0 right-0 z-50 
				justify-center items-center w-full
				p-4 overflow-x-hidden 
				overflow-y-auto 
				md:inset-0 h-[calc(100%-1rem)] max-h-full flex`}
		>
			{children}
		</div>
	);
};

const ModalContainer = ({children}: {children: React.ReactNode}) => {
	return (
		<div css={tw`relative w-full max-w-2xl max-h-full`}>
			<div css={tw`relative bg-white rounded-lg shadow dark:bg-gray-700`}>{children}</div>
		</div>
	);
};

const ModalHeader = ({children}: {children: React.ReactNode}) => {
	return (
		<div css={tw`flex items-start justify-between p-4 rounded-t dark:border-gray-600`}>
			{children}
		</div>
	);
};

const ModalContent = ({children}: {children: React.ReactNode}) => {
	return <div css={tw`p-6`}>{children}</div>;
};

const ModalFooter = ({children}: {children: React.ReactNode}) => {
	return (
		<div css={tw`flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600`}>
			{children}
		</div>
	);
};

const Title = ({children}: {children: React.ReactNode}) => {
	return <h3 css={tw`text-xl font-semibold text-gray-900 dark:text-white`}>{children}</h3>;
};

const Error = ({children}: {children: React.ReactNode}) => {
	return <p css={tw`mb-2 text-sm font-medium text-red-400 dark:text-red-500`}>{children}</p>;
};

const ModalAddText = ({
	closeModal,
	addText,
	textAreaValue,
	handleChange,
	errorMessage,
}: IPropSModalAddText) => {
	return (
		<Window>
			<ModalContainer>
				<ModalHeader>
					<Title>Adding text</Title>
					<Cross onClick={closeModal} />
				</ModalHeader>
				<ModalContent>
					<Error>{errorMessage}</Error>
					<TextArea value={textAreaValue} onChange={handleChange} />
				</ModalContent>
				<ModalFooter>
					<Button onClick={addText}>Add text</Button>
					<Button isAlternative={true} onClick={closeModal}>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContainer>
		</Window>
	);
};

export default ModalAddText;
