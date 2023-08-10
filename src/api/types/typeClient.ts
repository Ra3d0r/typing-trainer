export interface ICustomConfig {
	method: 'GET' | 'POST' | 'DELETE' | 'PATCH';
	body?: object | string;
	headers?: Record<string, string>;
}

export interface IClientConfig extends ICustomConfig {
	body?: string;
}
