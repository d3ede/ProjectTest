import { checkAnswer, countCorrect } from '../js/KusimusScripts.js';

describe('KusimusScripts', () => {
  test('checkAnswer() – õige vastus', () => {
    expect(checkAnswer('Tallinn', 'tallinn')).toBe('Õige!');
  });

  test('checkAnswer() – vale vastus', () => {
    expect(checkAnswer('Tallinn', 'Tartu')).toBe('Vale!');
  });

  test('checkAnswer() – tühja sisendi korral hoiatus', () => {
    expect(checkAnswer('Tallinn', '')).toBe('Palun sisesta vastus');
  });

  test('countCorrect() – loendab õiged vastused', () => {
    expect(countCorrect([true, false, true, true])).toBe(3);
  });

  test('countCorrect() – vale sisend viskab vea', () => {
    expect(() => countCorrect('not array')).toThrow('Invalid input');
  });
});
