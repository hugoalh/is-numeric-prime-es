import { bigintRootApproximate } from "./_bigint_root_approximate.ts";
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
	let itemBigInteger: bigint;
	if (typeof item === "bigint") {
		itemBigInteger = item;
	} else {
		if (!Number.isInteger(item)) {
			return false;
		}
		itemBigInteger = BigInt(item);
	}
	if (
		itemBigInteger === 2n ||
		itemBigInteger === 3n ||
		itemBigInteger === 5n ||
		itemBigInteger === 7n
	) {
		return true;
	}
	if (
		itemBigInteger < 2n ||
		itemBigInteger % 2n === 0n ||
		itemBigInteger % 3n === 0n ||
		itemBigInteger % 5n === 0n ||
		itemBigInteger % 7n === 0n
	) {
		return false;
	}
	const divisorMaximum: bigint = bigintRootApproximate(itemBigInteger).ceil;
	for (let divisor: bigint = 3n; divisor <= divisorMaximum; divisor += 2n) {
		if (itemBigInteger % divisor === 0n) {
			return false;
		}
	}
	return true;
}
export default isNumericPrime;
