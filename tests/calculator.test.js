import calculator from '../functions/calculator';

const calc = calculator();

test('add', () => {
	expect(calc.add(3, 4)).toBe(7);
});

test('subtract', () => {
	expect(calc.subtract(3, 4)).toBe(-1);
});

test('multiply', () => {
	expect(calc.multiply(1.5, 3)).toBe(4.5);
});

test('divide', () => {
	expect(calc.divide(11, 2)).toBe(5.5);
});
