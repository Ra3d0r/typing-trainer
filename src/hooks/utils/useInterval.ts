import {useEffect, useRef} from 'react';

const useInterval = (callback: () => void, delay: number, shouldRun = true): void => {
	const savedCallback = useRef<() => void>();

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		function tick() {
			if (savedCallback.current) {
				savedCallback.current();
			}
		}

		let intervalId: ReturnType<typeof setTimeout>;
		if (shouldRun) {
			intervalId = setInterval(tick, delay);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [delay, shouldRun]);
};

export default useInterval;
