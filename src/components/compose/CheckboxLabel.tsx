import tw from 'twin.macro';

import Checkbox from '@components/UI/Checkbox';
import Label from '@components/UI/Label';
import LinkForm from '@components/UI/LinkForm';

import {IPropsCheckboxLabel} from './types/typesCheckboxLabel';

const CheckboxLabel = ({name, register, options, label, link, ...other}: IPropsCheckboxLabel) => {
	return (
		<div className="flex items-start">
			<div className="flex items-center h-5">
				<Checkbox register={register} name={name} options={options} {...other} />
			</div>
			<div css={tw`ml-3 text-sm self-end pt-[1px]`}>
				<Label>
					{label} {link && <LinkForm to={link.to}> {link.text} </LinkForm>}
				</Label>
			</div>
		</div>
	);
};

export default CheckboxLabel;
