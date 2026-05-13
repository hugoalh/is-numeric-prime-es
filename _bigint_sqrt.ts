export interface BigIntMathApproximateResult {
	ceil: bigint;
	floor: bigint;
}
/**
 * Return the square root of the big integer, approximate.
 * @param {bigint} value
 * @returns {BigIntMathApproximateResult} Result, approximate.
 */
export function bigintSqrt(value: bigint): BigIntMathApproximateResult {
	if (!(value >= 0n)) {
		throw new RangeError(`\`${value}\` is not a bigint which is positive!`);
	}
	if (value === 0n) {
		return {
			ceil: 0n,
			floor: 0n
		};
	}
	let x: bigint = value / 2n + 1n;
	let y: bigint = (x + value / x) / 2n;
	while (y < x) {
		x = y;
		y = (x + value / x) / 2n;
	}
	return {
		ceil: (x ** 2n === value) ? x : (x + 1n),
		floor: x
	};
}
