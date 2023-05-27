import {ModalAddText} from '../../../../components/modal/ModalAddText';
import {useCustomMode} from '../../../../hooks/useCustomMode.js';

const CustomMode = () => {
	const [status, addText, closeModal] = useCustomMode();
	return status === 'loading' && <ModalAddText closeModal={closeModal} addText={addText} />;
};

export {CustomMode};
