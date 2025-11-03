import { getFlagColors } from '../js/lippScript.js';

describe('lippScript', () => {
  test('tagastab Eesti lipu värvid', () => {
    expect(getFlagColors('Estonia')).toEqual(['sinine', 'must', 'valge']);
  });

  test('tundmatu riik tagastab tühja massiivi', () => {
    expect(getFlagColors('Atlantis')).toEqual([]);
  });
});