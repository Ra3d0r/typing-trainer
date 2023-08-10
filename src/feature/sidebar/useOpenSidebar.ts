import {useEffect, useState} from 'react';

const useOpenSidebar: () => [boolean, (isOpen: boolean) => void] = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const closeOnClickAway = (event: MouseEvent) => {
			if (!isOpen && event.target instanceof HTMLElement) {
				if (!event.target.closest('#default-sidebar')) {
					setIsOpen(false);
				}
			}
		};

		document.body.addEventListener('click', closeOnClickAway);

		return () => {
			document.body.removeEventListener('click', closeOnClickAway);
		};
		// eslint-disable-next-line
	}, []);

	return [isOpen, setIsOpen];
};

export default useOpenSidebar;
