# Is Numeric Prime (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[DistBoard @hugoalh](https://hugoalh.github.io/distboard/is_numeric_prime_ecmascript)
● [GitHub](https://github.com/hugoalh/is-numeric-prime-es)
● [JSR](https://jsr.io/@hugoalh/is-numeric-prime)
● [NPM](https://www.npmjs.com/package/@hugoalh/is-numeric-prime)

An ECMAScript module to determine whether the numeric is prime.

## 🎯 Runtime Targets

Any runtime which support ECMAScript should able to use this; These runtimes are officially supported:

- **[Bun](https://bun.sh/)** >= v1.1.0
- **[Deno](https://deno.land/)** >= v2.1.0
- **[NodeJS](https://nodejs.org/)** >= v20.9.0

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources & Entrypoints

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/is-numeric-prime-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/is-numeric-prime[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/is-numeric-prime[@{Tag}]
  ```

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

> [!NOTE]
> - Different runtimes have vary support for the sources and entrypoints, visit the runtime documentation for more information.
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## 🧩 APIs

- ```ts
  function isNumericPrime(item: bigint | number): boolean;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/is-numeric-prime)

## ✍️ Examples

- ```ts
  isNumericPrime(9876);
  //=> false
  ```
- ```ts
  isNumericPrime(8n);
  //=> false
  ```
- ```ts
  isNumericPrime(17);
  //=> true
  ```
- ```ts
  isNumericPrime(23n);
  //=> true
  ```
