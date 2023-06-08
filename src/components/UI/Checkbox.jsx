import {Link} from 'react-router-dom';

const Checkbox = ({name, register, required, label, link, ...other}) => {
	return (
		<div className="flex items-start">
			<div className="flex items-center h-5">
				<input
					type="checkbox"
					className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
					{...other}
					{...register(name)}
				/>
			</div>
			<div className="ml-3 text-sm">
				<label htmlFor={name} className="text-gray-500 dark:text-gray-300">
					{label}{' '}
					{link && (
						<Link
							className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
							to={link.to}
						>
							{' '}
							{link.text}{' '}
						</Link>
					)}
				</label>
			</div>
		</div>
	);
};

export default Checkbox;
