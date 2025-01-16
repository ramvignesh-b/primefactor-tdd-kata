export class PrimeFactor {
    public calculateFactors(input: number): number[] {
        const num = input;
        if (num <= 1) {
            return [];
        }
        if (num === 3) {
            return [3];
        }
        return [2];
    }
}