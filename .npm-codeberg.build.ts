import {
	readManifest,
	transform
} from "DNT";
const manifest = await readManifest("jsr.jsonc");
await transform({
	copyEntries: [
		"LICENSE.md",
		"README.md"
	],
	//@ts-ignore Lazy type.
	entrypointsScript: manifest.exports,
	generateDeclarationMap: true,
	metadata: {
		//@ts-ignore Lazy type.
		name: manifest.name,
		//@ts-ignore Lazy type.
		version: manifest.version,
		description: "A module to determine whether the numeric is prime.",
		keywords: [
			"is",
			"numeric",
			"prime"
		],
		homepage: "https://codeberg.org/hugoalh/is-numeric-prime-es#readme",
		bugs: {
			url: "https://codeberg.org/hugoalh/is-numeric-prime-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://codeberg.org/hugoalh/is-numeric-prime-es.git"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "dist/npm-codeberg",
	outputDirectoryPreEmpty: true
});
