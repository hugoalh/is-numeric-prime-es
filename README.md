# Is Numeric Prime (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/is-numeric-prime-es](https://img.shields.io/github/v/release/hugoalh/is-numeric-prime-es?label=hugoalh/is-numeric-prime-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/is-numeric-prime-es")](https://github.com/hugoalh/is-numeric-prime-es)
[![JSR: @hugoalh/is-numeric-prime](https://img.shields.io/jsr/v/@hugoalh/is-numeric-prime?label=@hugoalh/is-numeric-prime&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/is-numeric-prime")](https://jsr.io/@hugoalh/is-numeric-prime)
[![NPM: @hugoalh/is-numeric-prime](https://img.shields.io/npm/v/@hugoalh/is-numeric-prime?label=@hugoalh/is-numeric-prime&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-numeric-prime")](https://www.npmjs.com/package/@hugoalh/is-numeric-prime)

An ECMAScript module to determine whether the numeric is prime.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

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

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

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
