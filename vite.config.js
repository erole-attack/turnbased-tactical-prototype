import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$stores: path.resolve('./src/stores'),
			$images: path.resolve('./src/static/images'),
			$assets: path.resolve('./src/assets')
		}
	}
};

export default config;
