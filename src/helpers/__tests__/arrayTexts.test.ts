import arrayTexts from '../arrayTexts';

describe('arrayTexts', () => {
	const words = ['word1', 'word2', 'word3'];
	const posts = [
		{
			author: 'Mario Little',
			post: 'introduced bit central father rate brick lost toy',
		},
	];
	const objectFromApi = {
		date: '2020-01-01T00:00:00.000Z',
		words,
		posts,
	};

	it('should return array strings', () => {
		expect(arrayTexts(objectFromApi, 'easy', {easy: 'words'})).toEqual(words);
	});
	it('should return array objects', () => {
		expect(arrayTexts(objectFromApi, 'hard', {hard: 'posts'})).toEqual(posts);
	});
	it('should return array strings', () => {
		expect(arrayTexts(words, 'hard', {hard: null})).toEqual(words);
	});

	it('should throw error', () => {
		expect(() => arrayTexts(objectFromApi, 'easy', {hard: 'posts'})).toThrowError(
			'The game mode does not match the key of the object written in the config file.',
		);
	});
	it('should throw error', () => {
		expect(() => arrayTexts(objectFromApi, 'easy', {easy: 'date'})).toThrowError(
			'Data by key must be an array',
		);
	});
	it('should throw error', () => {
		expect(() => arrayTexts(objectFromApi, 'easy', {easy: null})).toThrowError(
			'Specify the key to the object receive from API',
		);
	});
});
