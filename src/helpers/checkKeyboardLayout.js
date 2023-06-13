const checkKeyboardLayout = (lang, event) => {
	switch (lang) {
		case 'en':
			return event.key.match(/\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_]/g);
		default:
			throw new Error('Unknown language');
	}
};

export default checkKeyboardLayout;
