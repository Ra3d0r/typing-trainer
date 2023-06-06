import {Link} from 'react-router-dom';

const Logo = ({children, cls}) => {
	return (
		<Link to="/" className={`flex items-center`}>
			<span
				className={`self-center text-2xl text-blue-600 dark:text-blue-500 font-semibold whitespace-nowrap ${cls}`}
			>
				{children}
			</span>
		</Link>
	);
};

export default Logo;
