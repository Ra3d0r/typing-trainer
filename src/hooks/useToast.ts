import {useSelector} from 'react-redux';

import {selectToastInfo} from '@feature/toast/toastSelectors';
import {toastActions} from '@feature/toast/toastSlice';

import {useAppDispatch} from '@store/redux-hooks';

import {typeUseToast} from './types/typeUseToast';
import useTimeout from './utils/useTimeout';

const {closeToast} = toastActions;

const useToast: typeUseToast = (ms) => {
	const {message, type} = useSelector(selectToastInfo);
	const dispatch = useAppDispatch();

	const closeAlert = () => dispatch(closeToast());

	useTimeout(message, ms, closeAlert);

	return [message, type, closeAlert];
};

export default useToast;
