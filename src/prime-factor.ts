export class PrimeFactor {
    public calculateFactors(input: number): number[] {
        if (input <= 1) {
            return [];
        }

        return this.findFactors(input);
    }

    private findFactors(input: number): number[] {
        const factors: number[] = [];
        let num = input;

        for (let divisor = 2; divisor <= num; divisor++) {
            while (num % divisor === 0) {
                factors.push(divisor);
                num /= divisor;
            }
        }

        return factors;
    }
}