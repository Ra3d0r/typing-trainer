import tw from 'twin.macro';

const alternative = tw`
py-3 px-5  text-sm font-medium text-gray-900 
focus:outline-none bg-white rounded-lg border border-gray-200 
hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 
dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
`;

const defaultButton = tw`text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium 
rounded-lg text-sm px-5 py-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`;

const Button = ({text, onClick, isAlternative = false}) => {
	return (
		<button type="button" css={[defaultButton, isAlternative && alternative]} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
