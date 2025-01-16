export class PrimeFactor {
    public calculateFactors(input: number): number[] {
        let num = input;
        const factors: number[] = [];

        if (num <= 1) {
            return factors;
        }

        while (num % 2 === 0) {
            factors.push(2);
            num /= 2;
        }

        while (num % 3 === 0) {
            factors.push(3);
            num /= 3;
        }

        if (num > 1) {
            factors.push(num)
        }

        return factors;
    }
}