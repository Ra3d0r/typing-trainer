import Loading from '@components/status/Loading';

const LoadingFullScreen = () => {
	return (
		<div className="fixed top-0 left-0 w-screen h-screen">
			<div className="flex justify-center items-center h-screen">
				<Loading />
			</div>
		</div>
	);
};

export default LoadingFullScreen;
