import {typeFindValue} from './types/typeFindValue';

const findValue: typeFindValue = (obj, key) => {
	if (obj === null) {
		return null;
	}

	if (Object.prototype.hasOwnProperty.call(obj, key)) {
		return obj[key];
	}

	for (const prop in obj) {
		if (typeof obj[prop] === 'object') {
			const result = findValue(obj[prop] as Record<string, string | unknown>, key);
			if (result) {
				return result;
			}
		}
	}

	return null;
};

export default findValue;
