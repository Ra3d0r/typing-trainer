const Container = ({children}) => {
	return (
		<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			{children}
		</div>
	);
};

export default Container;
