import randomTextFromArray from '../randomTextFromArray';
import randomIntFromInterval from '../utils/randomIntFromInterval';

jest.mock('../utils/randomIntFromInterval');
const mockedRandomIntFromInterval = jest.mocked(randomIntFromInterval);

describe('randomTextFromArray', () => {
	const words = ['word1', 'word2', 'word3'];
	const posts = [
		{
			author: 'Mario Little',
			post: 'introduced bit central father rate brick lost toy',
			timestamp: 20000,
		},
		{
			author: 'Janie Massey',
			post: 'speech design process window got split worse magnet',
			timestamp: 40000,
		},
	];

	it('should return string', () => {
		mockedRandomIntFromInterval.mockReturnValue(2);
		expect(randomTextFromArray(words, 'easy', {easy: null})).toBe(words[2]);
		expect(randomIntFromInterval).toHaveBeenCalledWith(0, words.length - 1);
	});

	it('should return string', () => {
		mockedRandomIntFromInterval.mockReturnValue(1);
		expect(randomTextFromArray(posts, 'easy', {easy: 'post'})).toBe(posts[1]?.post);
		expect(randomIntFromInterval).toHaveBeenCalledWith(0, words.length - 1);
	});

	it('should throw error', () => {
		mockedRandomIntFromInterval.mockReturnValue(1);
		expect(() => randomTextFromArray(posts, 'easy', {easy: 'timestamp'})).toThrowError(
			'Text for typing must been string',
		);
		expect(randomIntFromInterval).toHaveBeenCalledWith(0, words.length - 1);
	});

	it('should throw error', () => {
		mockedRandomIntFromInterval.mockReturnValue(1);
		expect(() => randomTextFromArray(posts, 'easy', {easy: null})).toThrowError(
			'Specify the key to the object',
		);
		expect(randomIntFromInterval).toHaveBeenCalledWith(0, words.length - 1);
	});
});
