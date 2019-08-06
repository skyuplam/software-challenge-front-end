import { isNan, keyToName } from '../string';


describe('isNan', () => {
  test('undefined', () => {
    expect(isNan(undefined)).toBeFalsy();
  });
  test('integer', () => {
    expect(isNan('1')).toBeFalsy();
    expect(isNan('10000')).toBeFalsy();
  });
  test('integer appended with characters', () => {
    expect(isNan('1GGG')).toBeFalsy();
    expect(isNan('10000GGG')).toBeFalsy();
    expect(isNan('10000 ')).toBeFalsy();
    expect(isNan('10,000')).toBeFalsy();
    expect(isNan('10 000')).toBeFalsy();
  });
  test('integer prepended with characters', () => {
    expect(isNan('GG1')).toBeTruthy();
    expect(isNan('GG10000')).toBeTruthy();
  });
  test('floating point', () => {
    expect(isNan('0.1')).toBeFalsy();
    expect(isNan('1.11')).toBeFalsy();
  });
  test('floating point appended with character', () => {
    expect(isNan('0.1GG')).toBeFalsy();
    expect(isNan('1.11GG')).toBeFalsy();
    expect(isNan('1.11 ')).toBeFalsy();
    expect(isNan('1,000.11 ')).toBeFalsy();
    expect(isNan('1 000.11 ')).toBeFalsy();
  });
  test('floating point prepended with characters', () => {
    expect(isNan('GG1.1')).toBeTruthy();
    expect(isNan('GG10000.55')).toBeTruthy();
  });
  test('characters', () => {
    expect(isNan('GG')).toBeTruthy();
    expect(isNan('%%%%')).toBeTruthy();
    expect(isNan(' ')).toBeTruthy();
  });
});

describe('keyToName', () => {
  test.each([
    ['helloWorld', 'Hello World'],
    ['hello-world', 'Hello World'],
    ['Hello-World', 'Hello World'],
    ['hello world', 'Hello World'],
    ['hello_world', 'Hello World'],
    ['HELLO_WORLD', 'Hello World'],
  ])(
    'keyToName(%s) => %s',
    (str, expected) => {
      expect(keyToName(str)).toEqual(expected);
    },
  );
});
