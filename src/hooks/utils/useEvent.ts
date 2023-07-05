import {useCallback, useLayoutEffect, useRef} from 'react';

const useEvent = <T extends (event: KeyboardEvent) => void>(fn: T) => {
	const fnRef = useRef(fn);

	useLayoutEffect(() => {
		fnRef.current = fn;
	}, [fn]);

	const eventCb = useCallback(
		(...args: [event: KeyboardEvent]) => {
			return fnRef.current.apply(null, args);
		},
		[fnRef],
	);

	return eventCb as unknown as T;
};

export default useEvent;
