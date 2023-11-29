import cleanTelNumber from '../index';

test('first number', () => {
  const expected = '+79270000000';
  const result = cleanTelNumber('8 (927) 000-00-00');
  expect(result).toBe(expected);
});

test('second number', () => {
  const expected = '+79600000000';
  const result = cleanTelNumber('+7 960 000 00 00');
  expect(result).toBe(expected);
});

test('third number', () => {
  const expected = '+860000000000';
  const result = cleanTelNumber('+86 000 000 0000');
  expect(result).toBe(expected);
});
