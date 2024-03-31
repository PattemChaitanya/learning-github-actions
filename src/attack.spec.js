import attack from './attack';

test('should attack return', () => {
  const result = attack('sony', 23);
  // expect(result).toBe('sony dealt 23 damage!');
  expect(result).toMatchSnapshot();
});
