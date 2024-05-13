const tests = [
  { name: 'test1', result: 'pass' },
  { name: 'test2', result: 'fail' },
  { name: 'test3', result: 'pass' },
];

tests.forEach(test => console.log(`${test.name}: ${test.result}`));
