import { PrimeFactor } from "./prime-factor";

export const primeFactorCalculator = () => {
    const input = 60;
    const primeFactor = new PrimeFactor();
    const factors = primeFactor.calculateFactors(input);

    console.log(`Prime Factors of ${input}: ${factors}`);
}

primeFactorCalculator();
