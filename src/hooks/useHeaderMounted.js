import {useEffect} from 'react';

const useHeaderMounted = () => {
	useEffect(() => {
		console.log('useHeaderMounted');
		document.getElementById('preloader').style.display = 'none';
	});
};

export default useHeaderMounted;
