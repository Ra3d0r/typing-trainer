import {ModalAddText} from '../../components/modal/ModalAddText.jsx';
import {useCustomMode} from '../../hooks/useCustomMode.js';

const CustomMode = () => {
	const [status, addText, closeModal] = useCustomMode();
	return (
		status === 'loading' && <ModalAddText isOpen={true} closeModal={closeModal} addText={addText} />
	);
};

export {CustomMode};
