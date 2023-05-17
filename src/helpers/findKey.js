export const findKey = (obj, key) => {
	if (key === null || key === undefined) {
		return obj;
	}

	if (obj === null) {
		return null;
	}

	let result = null;
	let found = false;

	function search(obj) {
		if (found) {
			return;
		}

		if (obj.hasOwnProperty(key)) {
			result = obj[key];
			found = true;
			return;
		}

		for (const prop in obj) {
			if (typeof obj[prop] === 'object') {
				search(obj[prop]);
			}
		}
	}

	search(obj);
	return result;
};
