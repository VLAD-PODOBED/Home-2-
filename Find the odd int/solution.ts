import { solve } from './solution';
import { assert } from 'chai';

describe('Example tests', function() {
  doTest([7],7);
  doTest([0], 0);
  doTest([1,1,2], 2);
  doTest([0,1,0,1,0], 0);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);
});

function doTest(a: number[], n: number) {
  it(`a = ${JSON.stringify(a)} ; n = ${n}`, () => {
    assert.strictEqual(solve(a), n);
  });
}