const Title = ({children}: {children: React.ReactNode}) => {
	return (
		<h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
			{children}
		</h2>
	);
};

export default Title;
