import {useEffect} from 'react';

import {useEvent} from './useEvent';

function useKeyboardEvent(type, cb) {
	const eventCb = useEvent(cb);

	useEffect(() => {
		document.addEventListener(type, eventCb);

		return () => document.removeEventListener(type, eventCb);
	}, [eventCb]);
}

export {useKeyboardEvent};
