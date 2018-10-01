var expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var one = isRealString(2);

        expect(one).toBe(false)
    }); 

    it('should reject string with only spaces', () => {
        var two =  isRealString('   ');

        expect(two).toBe(false)
    }); 

    it('should allow string with non-space characters', () => {
        var three = isRealString(' jane the virgin  ');

        expect(three).toBe(true);
    });
});
    