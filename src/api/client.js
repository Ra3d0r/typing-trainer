const client = async (endPoint, {body, ...customConfig}) => {
	const headers = {
		'Content-Type': 'applications/json',
	};

	const config = {
		method: body ? 'POST' : 'GET',
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
		return Promise.reject(error.message);
	}
};

client.get = function (endPoint, customConfig = {}) {
	return client(endPoint, customConfig);
};

client.post = function (endPoint, body, customConfig = {}) {
	return client(endPoint, {...customConfig, body});
};

client.delete = function (endPoint, customConfig = {}) {
	return client(endPoint, {...customConfig, method: 'DELETE'});
};

client.patch = function (endPoint, body, customConfig = {}) {
	return client(endPoint, {...customConfig, body, method: 'PATCH'});
};

export default client;
