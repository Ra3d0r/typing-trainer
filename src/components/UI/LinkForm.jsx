import {Link} from 'react-router-dom';

const LinkForm = ({children, ...props}) => {
	return (
		<Link
			className={`text-sm font-medium text-blue-600 hover:underline dark:text-blue-500`}
			{...props}
		>
			{children}
		</Link>
	);
};

export default LinkForm;
