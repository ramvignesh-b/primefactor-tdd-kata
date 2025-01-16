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
});