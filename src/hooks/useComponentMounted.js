import {useEffect} from 'react';

const useComponentMounted = () => {
	useEffect(() => {
		document.getElementById('preloader').style.display = 'none';
	});
};

export default useComponentMounted;
