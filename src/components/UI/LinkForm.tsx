import {Link} from 'react-router-dom';

const LinkForm = ({children, to, ...props}: {children: React.ReactNode; to: string}) => {
	return (
		<Link
			className={`text-sm font-medium text-blue-600 hover:underline dark:text-blue-500`}
			to={to}
			{...props}
		>
			{children}
		</Link>
	);
};

export default LinkForm;
