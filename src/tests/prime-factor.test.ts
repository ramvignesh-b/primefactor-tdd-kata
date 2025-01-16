import { PrimeFactor } from '../prime-factor';

describe("Prime Factor Calulator", () => {
    let primeFactor: PrimeFactor;

    beforeEach(() => {
        primeFactor = new PrimeFactor();
    });

    it("should return an empty list for 1", () => {
        expect(primeFactor.calculateFactors(1)).toStrictEqual([]);
    });

    it("should return a list of factor [2] for input 2", () => {
        expect(primeFactor.calculateFactors(2)).toStrictEqual([2]);
    });

    it('should return [3] for input 3', () => {
        expect(primeFactor.calculateFactors(3)).toStrictEqual([3]);
    });

    it('should return [2,2] for input 4', () => {
        expect(primeFactor.calculateFactors(4)).toEqual([2,2]);
    });

    it("should return [5] for input 5", () => {
        expect(primeFactor.calculateFactors(5)).toStrictEqual([5]);
    });

    it("should return [2, 3] for input 6", () => {
        expect(primeFactor.calculateFactors(6)).toStrictEqual([2, 3]);
    });
});