import { cipher, rot } from '../functions/caesarCipher';

const testString = 'And you will know my name is the Lord, When I lay my vengeance upon thee!';
const shortString = 'copying';

/* Single Character ROT Tests */

test('rot1 z to a', () => {
    expect(rot(1, 'z')).toBe('a');
});

test('rot3 a to d', () => {
    expect(rot(3, 'a')).toBe('d');
});

test('rot0 a to a', () => {
    expect(rot(0, 'a')).toBe('a');
});

test('rot26 z to z', () => {
    expect(rot(26, 'z')).toBe('z');
});

/* Full String Cipher Tests */

test('rot25 for', () => {
	expect(cipher(25, shortString)).toBe('bnoxhmf');
});

test('rot-1', () => {
	expect(cipher(-1, shortString)).toBe('bnoxhmf');
});

test('rot0 with capitals and punctuation', () => {
	expect(cipher(0, testString)).toBe(testString);
});

test('rot26 with capitals and punctuation', () => {
	expect(cipher(26, testString)).toBe(testString);
});

test('wrapping z to a', () => {
	expect(cipher(1, 'zoo')).toBe('app');
});