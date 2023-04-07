import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	adapter: adapter({
		pages: 'build',
		assets: 'build',
		fallback: 'index.html',
		precompress: false,
		strict: true
	})
};

export default config;
