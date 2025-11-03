import { add, divide, subtract } from '../js/calculatorScript.js';

describe('calculatorScript', () => {
  test('add() – korrektne liitmine', () => {
    // Algseis: 2 ja 3
    // Tegevus: liidame
    // Ootus: tulemus 5
    expect(add(2, 3)).toBe(5);
  });

  test('add() – veateade kui sisend pole number', () => {
    expect(() => add('a', 3)).toThrow('Invalid input');
  });

  test('divide() – korrektne jagamine', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide() – jagamine nulliga viskab vea', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });

  test('subtract() – lahutamine', () => {
    expect(subtract(10, 3)).toBe(7);
  });
});