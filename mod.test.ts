import { deepStrictEqual } from "node:assert";
import { isNumericPrime } from "./mod.ts";
Deno.test("1", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(1n), false);
});
Deno.test("2", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(2n), true);
});
Deno.test("3", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(3n), true);
});
Deno.test("8", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(8n), false);
});
Deno.test("17", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(17n), true);
});
Deno.test("23", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(23n), true);
});
Deno.test("97", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(97n), true);
});
Deno.test("997", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(997n), true);
});
Deno.test("65537", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(65537n), true);
});
Deno.test("975319", { permissions: "none" }, () => {
	deepStrictEqual(isNumericPrime(975319n), false);
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
