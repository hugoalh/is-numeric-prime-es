import { deepStrictEqual } from "node:assert";
import { randomInt } from "node:crypto";
import { bigintSqrt } from "./_bigint_sqrt.ts";
Deno.test("Main", { permissions: "none" }, async (t) => {
	const set: Set<number> = new Set<number>();
	while (set.size < 10000) {
		const value = randomInt(0, 2 ** randomInt(1, 48 + 1) - 1);
		set.add(value);
	}
	for (const value of set.values()) {
		await t.step(`${value}`, () => {
			const sqrtNumber = Math.sqrt(value);
			const sqrtBigInt = bigintSqrt(BigInt(value));
			deepStrictEqual(BigInt(Math.ceil(sqrtNumber)), sqrtBigInt.ceil);
			deepStrictEqual(BigInt(Math.floor(sqrtNumber)), sqrtBigInt.floor);
		});
	}
});
