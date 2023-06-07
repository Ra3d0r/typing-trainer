const Submit = ({children, ...other}) => {
	return (
		<button
			type="submit"
			className="w-full text-white bg-blue-600 hover:enabled:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:enabled:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500 disabled:text-white disabled:border-gray-200 disabled:shadow-none cursor-default enabled:cursor-pointer"
			{...other}
		>
			{children}
		</button>
	);
};

export default Submit;
