export class PrimeFactor {
    public calculateFactors(input: number): number[] {
        if (input <= 1) {
            return [];
        }

        return this.findFactors(input);
    }

    private findFactors(num: number): number[] {
        const factors: number[] = [];

        while (num % 2 === 0) {
            factors.push(2);
            num /= 2;
        }

        while (num % 3 === 0) {
            factors.push(3);
            num /= 3;
        }

        while (num % 5 === 0) {
            factors.push(5)
            num /= 5;
        }

        if (num > 1) {
            factors.push(num)
        }

        return factors;
    }
}