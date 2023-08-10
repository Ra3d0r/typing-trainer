const FlexContainer = ({children}: {children: React.ReactNode}) => {
	return <div className="flex flex-col min-h-screen dark:bg-gray-900">{children}</div>;
};

export default FlexContainer;
