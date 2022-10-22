import {solve} from './solution'
import {assert} from "chai";

function testing(actual:string, expected:string) {
  assert.strictEqual(actual, expected);
}

describe("Fixed Tests", function() {
    it("Basic tests revrot", function() {
        testing(solve("1234", 0), "");
        testing(solve("", 0), "");
        testing(solve("1234", 5), "");
        let s = "733049910872815764";
        testing(solve(s, 5), "330479108928157");
    });
});
