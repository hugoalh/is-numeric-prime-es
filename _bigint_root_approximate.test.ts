import { deepStrictEqual } from "node:assert";
import { randomInt } from "node:crypto";
import { bigintRootApproximate } from "./_bigint_root_approximate.ts";
Deno.test("Main", { permissions: "none" }, async (t) => {
	const set = new Set();
	while (set.size < 100) {
		const radicandNumber = randomInt(0, 100000000);
		const indexNumber = randomInt(1, 25);
		const token = `${radicandNumber}//${indexNumber}`;
		if (set.has(token)) {
			continue;
		}
		set.add(token);
		await t.step(`Radicand: ${radicandNumber}; Index: ${indexNumber}`, () => {
			const rootNumber = Math.pow(radicandNumber, 1 / indexNumber);
			const rootBigInt = bigintRootApproximate(BigInt(radicandNumber), BigInt(indexNumber));
			deepStrictEqual(BigInt(Math.ceil(rootNumber)), rootBigInt.ceil);
			deepStrictEqual(BigInt(Math.floor(rootNumber)), rootBigInt.floor);
		});
	}
});
