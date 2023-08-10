import {useEffect} from 'react';

const useDisablePreloader = () => {
	useEffect(() => {
		const preloader = document.getElementById('preloader');
		if (!preloader) {
			throw new Error('preloader not found');
		}
		preloader.style.display = 'none';
	});
};

export default useDisablePreloader;
