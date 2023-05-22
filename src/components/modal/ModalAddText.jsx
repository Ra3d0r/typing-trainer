import {Button} from '../UI/Button';
import {Cross} from '../UI/Cross';
import {TextArea} from '../UI/TextArea';

const ModalAddText = ({isOpen, closeModal, addText}) => {
	return (
		<div
			tabIndex={-1}
			aria-hidden="true"
			className={`fixed top-0 left-0 right-0 z-50 ${
				isOpen ? 'flex' : 'hidden'
			} justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
		>
			<div className="relative w-full max-w-2xl max-h-full ">
				{/* Modal content */}
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
					{/* Modal header */}
					<div className="flex items-start justify-between p-4  rounded-t dark:border-gray-600">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">Adding text</h3>
						<Cross onClick={closeModal} />
					</div>
					{/* Modal body */}
					<div className="p-6">
						<p id="error" className="mb-2 text-sm font-medium text-red-400 dark:text-red-500" />
						<TextArea />
					</div>
					{/* Modal footer */}
					<div className="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
						<Button text={'Add text'} onClick={addText} />
						<Button text={'Cancel'} alternative={true} onClick={closeModal} />
					</div>
				</div>
			</div>
		</div>
	);
};

export {ModalAddText};
