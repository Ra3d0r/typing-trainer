/** @type {import('ts-jest').JestConfigWithTsJest} */

/*eslint-env node*/
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
	},
	setupFilesAfterEnv: ['./jest-setup.ts'],
};
