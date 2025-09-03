/** Set the "next" tag to the newest version. */

import type { SpawnSyncReturns } from 'node:child_process'
import { execSync } from 'node:child_process'
import { clean, gt } from 'semver'
import pkgJson from '../package.json' with { type: 'json' }

const pkgName: string = pkgJson.name
let output: string

try {
	output = run(`pnpm view ${pkgName}@next version`)
} catch (error: unknown) {
	// Handle error when the next tag is not published yet.
	if (error === null || typeof error !== 'object' || !('stderr' in error))
		throw error

	const { stderr } = error as SpawnSyncReturns<string>
	const errMsg = 'No match found for version next'

	if (stderr.includes(errMsg) === false) throw error

	// Set to the lowest possible semver to ensure the next tag points to the current version.
	output = '0.0.0-alpha'
}

const nextVersion: string | null = clean(output)
const currentVersion: string | null = clean(pkgJson.version)

if (nextVersion === null) {
	const msg = `'next' version '${output}' is invalid.`
	throw new Error(msg)
}

if (currentVersion === null) {
	const msg = `Current version '${pkgJson.version}' is invalid.`
	throw new Error(msg)
}

const isCurrentVersionMostRecent: boolean = gt(currentVersion, nextVersion)

if (isCurrentVersionMostRecent) {
	run(`pnpm dist-tag add ${pkgName}@${currentVersion} next`)
}

function run(cmd: string): string {
	return execSync(cmd, { encoding: 'utf8' })
}
