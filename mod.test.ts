import { deepStrictEqual } from "node:assert";
import { isNumericPrime } from "./mod.ts";
Deno.test("8", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(8n), false);
});
Deno.test("17", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(17), true);
});
Deno.test("23", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(23n), true);
});
Deno.test("9876", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(9876), false);
});
Deno.test("9876543210123456789", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(9876543210123456789n), false);
});
Deno.test("98765432100123456789", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(98765432100123456789n), false);
});
Deno.test("98765432100123456789987654321001234567891", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(98765432100123456789987654321001234567891n), false);
});
