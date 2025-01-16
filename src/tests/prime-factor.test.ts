import { PrimeFactor } from '../prime-factor';

describe("Prime Factor Calulator", () => {
    let primeFactor: PrimeFactor;

    beforeEach(() => {
        primeFactor = new PrimeFactor();
    });

    it("should return an empty list for 1", () => {
        expect(primeFactor.calculateFactors(1)).toStrictEqual([]);
    });
});