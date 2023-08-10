import Input from '@components/UI/Input';
import Label from '@components/UI/Label';

import {IPropsInputLabel} from './types/typesInputLabel';

const InputLabel = ({label, name, register, options = {}, ...other}: IPropsInputLabel) => {
	return (
		<>
			<Label isAlternative={true}>{label}</Label>
			<Input register={register} name={name} options={options} {...other} />
		</>
	);
};

export default InputLabel;
