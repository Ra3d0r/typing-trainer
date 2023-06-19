import {useEffect, useRef} from 'react';

const useTimeout = (data, ms, fn) => {
	const idTimeout = useRef(null);

	useEffect(() => {
		if (data) {
			idTimeout.current = setTimeout(fn, ms);
		}
		if (!data && idTimeout.current) {
			clearTimeout(idTimeout.current);
		}
	}, [data]);
};

export default useTimeout;
