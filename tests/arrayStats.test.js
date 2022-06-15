import { expect, test } from '@jest/globals';
import arrayStats from '../functions/arrayStats';

const simpleArray = [1,2,3,-4,5,6,7,8];

test('not an array', () => {
    expect(() => arrayStats('climb').average).toThrow(Error);
});

test('simple average', () => {
    expect(arrayStats(simpleArray).average).toBe(3.5);
});

test('simple max', () => {
    expect(arrayStats(simpleArray).max).toBe(8);
});

test('simple min', () => {
    expect(arrayStats(simpleArray).min).toBe(-4);
});

test('simple length', () => {
    expect(arrayStats(simpleArray).length).toBe(8);
});