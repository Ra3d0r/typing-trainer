import {useEffect} from 'react';

const useHeaderMounted = () => {
	useEffect(() => {
		document.getElementById('preloader').style.display = 'none';
	});
};

export default useHeaderMounted;
