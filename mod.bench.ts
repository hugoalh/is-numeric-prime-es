import { isNumericPrime } from "./mod.ts";
Deno.bench("1", { permissions: "none" }, () => {
	isNumericPrime(1n);
});
Deno.bench("2", { permissions: "none" }, () => {
	isNumericPrime(2n);
});
Deno.bench("3", { permissions: "none" }, () => {
	isNumericPrime(3n);
});
Deno.bench("8", { permissions: "none" }, () => {
	isNumericPrime(8n);
});
Deno.bench("17", { permissions: "none" }, () => {
	isNumericPrime(17n);
});
Deno.bench("23", { permissions: "none" }, () => {
	isNumericPrime(23n);
});
Deno.bench("97", { permissions: "none" }, () => {
	isNumericPrime(97n);
});
Deno.bench("997", { permissions: "none" }, () => {
	isNumericPrime(997n);
});
Deno.bench("65537", { permissions: "none" }, () => {
	isNumericPrime(65537n);
});
Deno.bench("975319", { permissions: "none" }, () => {
	isNumericPrime(975319n);
});
Deno.bench("9876543210123456789", { permissions: "none" }, () => {
	isNumericPrime(9876543210123456789n);
});
Deno.bench("98765432100123456789", { permissions: "none" }, () => {
	isNumericPrime(98765432100123456789n);
});
Deno.bench("98765432100123456789987654321001234567891", { permissions: "none" }, () => {
	isNumericPrime(98765432100123456789987654321001234567891n);
});
