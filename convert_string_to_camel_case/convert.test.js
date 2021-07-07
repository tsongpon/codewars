const convert = require('./convert');

test('convert the-stealth-warrior to equal theStealthWarrior', () => {
  expect(convert('the-stealth-warrior')).toBe('theStealthWarrior');
});

test('convert The_Stealth_Warrior to equal TheStealthWarrior', () => {
  expect(convert('The_Stealth_Warrior')).toBe('TheStealthWarrior');
});

test('convert "" to equal to ""', () => {
  expect(convert("")).toBe("");
})

test('convert A-B-C to equal to ABC', () => {
  expect(convert('A-B-C')).toBe('ABC');
});


test('convert songpon to equal to songpon', () => {
  expect(convert('songpon')).toBe('songpon');
});
