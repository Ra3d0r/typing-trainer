import {useEffect} from 'react';

import useEvent from './useEvent';

const useKeyboardEvent = (type: keyof DocumentEventMap, cb: (event: KeyboardEvent) => void) => {
	const eventCb = useEvent(cb);

	useEffect(() => {
		document.addEventListener(type, eventCb as unknown as EventListener);

		return () => document.removeEventListener(type, eventCb as unknown as EventListener);
	}, [eventCb, type]);
};

export default useKeyboardEvent;
