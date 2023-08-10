import tw from 'twin.macro';

const alternative = tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`;

const defaultClass = tw`text-gray-500 dark:text-gray-300`;

const Label = ({
	children,
	isAlternative = false,
}: {
	children: React.ReactNode;
	isAlternative?: boolean;
}) => {
	return <label css={[defaultClass, isAlternative && alternative]}>{children}</label>;
};

export default Label;
