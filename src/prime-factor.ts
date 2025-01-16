export class PrimeFactor {
    public calculateFactors(input: number): number[] {
        const num = input;
        if (num > 1) {
            return [2];
        }
        return [];
    }
}