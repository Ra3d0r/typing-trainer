import Input from '../UI/Input';
import Label from '../UI/Label';

const InputLabel = ({label, name, register, options = {}, ...other}) => {
	return (
		<>
			<Label isAlternative={true}>{label}</Label>
			<Input register={register} name={name} options={options} {...other} />
		</>
	);
};

export default InputLabel;
