import { bigintSqrt } from "./_bigint_sqrt.ts";
// SOURCE: https://oeis.org/A000040
const primesKnown: readonly bigint[] = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n, 47n, 53n, 59n, 61n, 67n, 71n, 73n, 79n, 83n, 89n, 97n, 101n, 103n, 107n, 109n, 113n, 127n, 131n, 137n, 139n, 149n, 151n, 157n, 163n, 167n, 173n, 179n, 181n, 191n, 193n, 197n, 199n, 211n, 223n, 227n, 229n, 233n, 239n, 241n, 251n, 257n, 263n, 269n, 271n];
const primesPush: bigint[] = [];
function isNumericPrimeInternal(item: bigint): boolean {
	if (item < 2n) {
		return false;
	}
	const primes: readonly bigint[] = [...primesKnown, ...primesPush];
	if (primes.includes(item)) {
		return true;
	}
	if (primes.some((prime: bigint): boolean => {
		return (item > prime && item % prime === 0n);
	})) {
		return false;
	}
	const rootCeil: bigint = bigintSqrt(item).ceil;
	for (let divisor: bigint = primesKnown.at(-1)! + 2n; divisor <= rootCeil; divisor += 2n) {
		if (item % divisor === 0n) {
			return false;
		}
	}
	primesPush.push(item);
	return true;
}
/**
 * Determine whether the numeric is prime.
 * @param {bigint | number} item Item that need to determine.
 * @returns {boolean} Determine result.
 * @example
 * ```ts
 * isNumericPrime(9876);
 * //=> false
 * ```
 * @example
 * ```ts
 * isNumericPrime(8n);
 * //=> false
 * ```
 * @example
 * ```ts
 * isNumericPrime(17);
 * //=> true
 * ```
 * @example
 * ```ts
 * isNumericPrime(23n);
 * //=> true
 * ```
 */
export function isNumericPrime(item: bigint | number): boolean {
	if (typeof item === "bigint") {
		return isNumericPrimeInternal(item);
	}
	if (!Number.isInteger(item)) {
		return false;
	}
	return isNumericPrimeInternal(BigInt(item));
}
export default isNumericPrime;
