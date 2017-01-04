/**
 * Created by rtholmes on 2016-10-31.
 */

import {expect} from 'chai';

import Math from "../src/Math";
import Log from "../src/Util";

describe("MathSpec", function () {

    var math: Math = null;
    beforeEach(function () {
        math = new Math();
    });

    afterEach(function () {
        math = null;
    });

    it("Add should return 0 if no valid arrays are found", function () {
        return math.add([]).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(0);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });
});
