import { bigintRootApproximate } from "./_bigint_root_approximate.ts";
const primesKnown: readonly bigint[] = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n, 47n, 53n, 59n, 61n, 67n, 71n, 73n, 79n, 83n, 89n, 97n];
const primesPush: bigint[] = [];
/**
 * Determine whether the numeric is prime.
 * @param {bigint | number} item Item that need to determine.
 * @returns {boolean} Determine result.
 * @example 1
 * ```ts
 * isNumericPrime(9876);
 * //=> false
 * ```
 * @example 2
 * ```ts
 * isNumericPrime(8n);
 * //=> false
 * ```
 * @example 3
 * ```ts
 * isNumericPrime(17);
 * //=> true
 * ```
 * @example 4
 * ```ts
 * isNumericPrime(23n);
 * //=> true
 * ```
 */
export function isNumericPrime(item: bigint | number): boolean {
	let itemBigInt: bigint;
	if (typeof item === "bigint") {
		itemBigInt = item;
	} else {
		if (!Number.isInteger(item)) {
			return false;
		}
		itemBigInt = BigInt(item);
	}
	if (itemBigInt < 2n) {
		return false;
	}
	const primes: readonly bigint[] = [...primesKnown, ...primesPush];
	if (primes.includes(itemBigInt)) {
		return true;
	}
	if (primes.some((prime: bigint): boolean => {
		return (itemBigInt > prime && itemBigInt % prime === 0n);
	})) {
		return false;
	}
	const rootCeil: bigint = bigintRootApproximate(itemBigInt).ceil;
	for (let divisor: bigint = primesKnown[primesKnown.length - 1] + 2n; divisor <= rootCeil; divisor += 2n) {
		if (itemBigInt % divisor === 0n) {
			return false;
		}
	}
	primesPush.push(itemBigInt);
	return true;
}
export default isNumericPrime;
