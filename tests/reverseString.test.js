import reverseString from '../functions/reverseString';

const testCase1 = 'boss';
const expectedCase1 = 'ssob';

const testCase2 = '2boS$s';
const expectedCase2 = 's$Sob2';

const testCase3 = 'beast boss';
const expectedCase3 = 'ssob tsaeb';

const testCase4 = 15;

test('reverse string', () => {
	expect(reverseString(testCase1)).toBe(expectedCase1);
});

test('reverse string with other non-letters', () => {
	expect(reverseString(testCase2)).toBe(expectedCase2);
});

test('reverse string with spaces', () => {
	expect(reverseString(testCase3)).toBe(expectedCase3);
});

test('throw error when input is not a string', () => {
	expect(() => reverseString(testCase4)).toThrow(Error);
});
