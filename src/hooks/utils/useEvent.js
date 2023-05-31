import {useCallback, useLayoutEffect, useRef} from 'react';

const useEvent = (fn) => {
	const fnRef = useRef(fn);

	useLayoutEffect(() => {
		fnRef.current = fn;
	}, [fn]);

	const eventCb = useCallback(
		(...args) => {
			return fnRef.current.apply(null, args);
		},
		[fnRef],
	);

	return eventCb;
};

export {useEvent};
