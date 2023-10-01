import { add } from '../code/index';

describe('testing index file', () => {
    test('Empty string should result in zero', () =>{
        expect(add('')).toBe(0);
    });
    test('Functionality test', () =>{
        expect(add('1')).toBe(1);
        expect(add('1001')).toBe(0);
        expect(add('1,2,3')).toBe(6);
        expect(add('1,2,1000')).toBe(1003);
        expect(add('1,2,9999')).toBe(3);
    });
    test('Negatives should throw range error', () =>{
        expect(() => add('-10')).toThrow(RangeError);
        expect(() => add('1,2,-10')).toThrow(RangeError);
    });
});