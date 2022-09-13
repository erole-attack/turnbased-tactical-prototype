module.exports = {
	root: true,
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
	plugins: ['prettier', 'svelte3'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
