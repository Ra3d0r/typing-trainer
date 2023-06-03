import {useEffect} from 'react';

import useEvent from './useEvent';

const useKeyboardEvent = (type, cb) => {
	const eventCb = useEvent(cb);

	useEffect(() => {
		document.addEventListener(type, eventCb);

		return () => document.removeEventListener(type, eventCb);
	}, [eventCb]);
};

export default useKeyboardEvent;
