const checkKeyboardLayout = (lang, event) => {
	switch (lang) {
		case 'en':
			return /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_| ]/g.test(event.key);
		default:
			throw new Error('Unknown language');
	}
};

export default checkKeyboardLayout;
