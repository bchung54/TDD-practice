import capitalize from '../functions/capitalize';

const testCase1 = 'boss';
const testCase2 = 'boSS';
const testCase3 = '2boss';
const testCase4 = '#beach';
const testCase5 = 'beast3';
const testCase6 = 'beast boss';
const testCase7 = 15;

const expected = /^[A-Z][^\n]*/;

test('capitalize first character of a string', () => {
	expect(capitalize(testCase1)).toMatch(expected);
});

test('capitalize first character of a string with other capitals', () => {
	expect(capitalize(testCase2)).toMatch(expected);
});

test('ignore if first character is a number', () => {
	expect(capitalize(testCase3)).toBe(testCase3);
});

test('ignore if first character is a symbol', () => {
	expect(capitalize(testCase4)).toBe(testCase4);
});

test('handle strings with other symbols', () => {
	expect(capitalize(testCase5)).toMatch(expected);
});

test('capitalize first character of first word in string', () => {
	expect(capitalize(testCase6)).toMatch(expected);
});

test('throw error when input is not a string', () => {
	expect(() => capitalize(testCase7)).toThrow(Error);
});

test('return input if already capitalized', () => {
	expect(capitalize('Boss')).toMatch(expected);
});
