import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.test.ts'],
		environment: 'jsdom',
		setupFiles: ['src/test/setup.ts'],
		reporters: ['default', 'vitest-sonar-reporter'],
		outputFile: {
			'vitest-sonar-reporter': 'reports/sonar-report.xml'
		}
	}
});
