import {useCallback, useLayoutEffect, useRef} from 'react';

export function useEvent(fn) {
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
}
