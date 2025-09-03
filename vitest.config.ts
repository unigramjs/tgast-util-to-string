import { env } from 'node:process'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			enabled: true,
			thresholds: { '100': true },
			include: ['src/**/*.ts'],
			exclude: ['src/**/*.type.ts', 'src/**/index.ts'],
		},
		fileParallelism: env.DEBUG !== 'true',
	},
})
