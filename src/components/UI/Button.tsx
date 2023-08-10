import {IPropsButton, ISize} from './types/typesButton';

const alternative = `
font-medium text-gray-900 
focus:outline-none bg-white rounded-lg border border-gray-200 
hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 
dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
`;

const defaultButton = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium 
rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`;

const stylesSize: ISize = {
	small: `px-2.5 py-1.5 text-xs`,
	medium: `px-5 py-3 text-sm`,
	large: `px-4 py-2 text-base`,
	fullMedium: `w-full px-5 py-3 text-sm`,
};

const styleButton = (size: keyof ISize, isAlternative: boolean) => {
	return isAlternative
		? `${stylesSize[size]} ${alternative}`
		: `${stylesSize[size]} ${defaultButton}`;
};

const Button = ({children, onClick, isAlternative = false, size = 'medium'}: IPropsButton) => {
	return (
		<button type="button" className={styleButton(size, isAlternative)} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
