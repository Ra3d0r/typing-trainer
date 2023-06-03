import {useEffect, useRef} from 'react';

const useInterval = (callback, delay, shouldRun = true) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		let intervalId;
		if (shouldRun) {
			intervalId = setInterval(tick, delay);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [delay, shouldRun]);
};

export default useInterval;
