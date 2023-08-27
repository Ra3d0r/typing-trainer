import {typeLang} from '@types';

const checkKeyboardLayout = (lang: typeLang, char: string): boolean => {
	switch (lang) {
		case 'en':
			return /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_| ]/g.test(char);
		default:
			throw new Error('Unknown language');
	}
};

export default checkKeyboardLayout;
