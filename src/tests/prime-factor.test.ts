import { PrimeFactor } from '../prime-factor';
import { primeFactorCalculator } from '../index';
import * as readline from "readline";

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
        expect(primeFactor.calculateFactors(4)).toEqual([2, 2]);
    });

    it("should return [5] for input 5", () => {
        expect(primeFactor.calculateFactors(5)).toStrictEqual([5]);
    });

    it("should return [2, 3] for input 6", () => {
        expect(primeFactor.calculateFactors(6)).toStrictEqual([2, 3]);
    });

    it("should return [7] for input 7", () => {
        expect(primeFactor.calculateFactors(7)).toStrictEqual([7]);
    });

    it("should return [2, 2, 2] for input 8", () => {
        expect(primeFactor.calculateFactors(8)).toStrictEqual([2, 2, 2]);
    });

    it("should return [3, 3] for input 9", () => {
        expect(primeFactor.calculateFactors(9)).toStrictEqual([3, 3]);
    });

    it("should return [2, 5] for input 10", () => {
        expect(primeFactor.calculateFactors(10)).toStrictEqual([2, 5]);
    });

    it("should return [11] for input 11", () => {
        expect(primeFactor.calculateFactors(11)).toStrictEqual([11]);
    });

    it("should return [2, 2, 3] for input 12", () => {
        expect(primeFactor.calculateFactors(12)).toStrictEqual([2, 2, 3]);
    });

    it("should return [7, 5] for input 35", () => {
        expect(primeFactor.calculateFactors(35)).toStrictEqual([5, 7]);
    });

    it("should return 4 different prime factors ([2, 2, 3, 3, 5, 7]) for input 1260", () => {
        expect(primeFactor.calculateFactors(1260)).toStrictEqual([2, 2, 3, 3, 5, 7]);
    });


});


jest.mock("readline");

describe("Prime Factor Printer", () => {
    let consoleSpy: jest.SpyInstance;
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, "log").mockImplementation();
    });

    xit("should print the prime factors of an input to the console", () => {

        primeFactorCalculator();

        expect(consoleSpy).toHaveBeenCalledWith("Prime Factors of 60: 2,2,3,5");
    });

    it("should get an input from the user and print the prime factors of that input to the console", () => {
        const input = 264;

        const mockInputPrompt = jest.fn((prompt, callback) => {
            expect(prompt).toBe("Enter a number to find the prime factors for: ");
            callback(input);
        });
        const mockExit = jest.fn();

        (readline.createInterface as jest.Mock).mockReturnValue({
            question: mockInputPrompt,
            close: mockExit
        });

        primeFactorCalculator();

        expect(consoleSpy).toHaveBeenCalledWith("Prime Factors of 264: 2,3,11");
        expect(mockExit).toHaveBeenCalled();
    });
});