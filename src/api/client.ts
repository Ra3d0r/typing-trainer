import {IClientConfig, ICustomConfig} from './types/typeClient';

const client = async (endPoint: string, {body, ...customConfig}: ICustomConfig) => {
	const headers = {
		'Content-Type': 'applications/json',
	};

	const config: IClientConfig = {
		...customConfig,
		headers: {
			...headers,
			...customConfig.headers,
		},
	};

	if (body) {
		config.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(endPoint, config);
		if (!response.ok) {
			throw new Error('failed to fetch');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		if (error instanceof Error) {
			return Promise.reject(error.message);
		}
	}
};

client.get = function (endPoint: string, customConfig = {}) {
	return client(endPoint, {...customConfig, method: 'GET'});
};

client.post = function (endPoint: string, body: object, customConfig = {}) {
	return client(endPoint, {...customConfig, body, method: 'POST'});
};

client.delete = function (endPoint: string, customConfig = {}) {
	return client(endPoint, {...customConfig, method: 'DELETE'});
};

client.patch = function (endPoint: string, body: object, customConfig = {}) {
	return client(endPoint, {...customConfig, body, method: 'PATCH'});
};

export default client;
