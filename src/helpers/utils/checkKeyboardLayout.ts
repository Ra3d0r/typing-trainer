import {typeLang} from '@types';

const checkKeyboardLayout = (lang: typeLang, char: string): boolean => {
	switch (lang) {
		case 'en':
			return /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_\#| ]/g.test(char);
		case 'ru':
			return /\d|[А-Яа-я]|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_\#| |№|ё|Ё]|Shift|Tab|Backspace|Enter|CapsLock/g.test(
				char,
			);
		default:
			throw new Error('Unknown language');
	}
};

export default checkKeyboardLayout;
