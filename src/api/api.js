import {separationTextMode} from '../helpers/separationTextMode';
import {client} from './client';

export const loadText = async (url, headers, mode) => {
	try {
		const AllText = await client.get(url, {headers});
		return separationTextMode(AllText, mode);
	} catch (err) {
		return Promise.reject(err);
	}
};
