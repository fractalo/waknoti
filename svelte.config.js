import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				"*", 
				"/channels/common",
				"/channels/ine",
				"/channels/jingburger",
				"/channels/lilpa",
				"/channels/jururu",
				"/channels/gosegu",
				"/channels/viichan",
				"/channels/woowakgood",
			]
		}
	}
};

export default config;
