import {useEffect, useRef} from 'react';

const useTimeout = (data: unknown, ms: number, fn: () => void) => {
	const idTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (data) {
			idTimeout.current = setTimeout(fn, ms);
		}
		if (!data && idTimeout.current) {
			clearTimeout(idTimeout.current);
		}
	}, [data, fn, ms]);
};

export default useTimeout;
