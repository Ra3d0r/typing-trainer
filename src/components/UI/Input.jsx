const Input = ({name, register, options = {}, ...other}) => {
	return (
		<input
			className="enabled:bg-gray-50 disabled:bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 disabled:dark:bg-gray-900 enabled:dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			{...other}
			{...register(name, options)}
		/>
	);
};

export default Input;
