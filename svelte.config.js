import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

// Rehype plugins : https://github.com/rehypejs/rehype/blob/HEAD/doc/plugins.md#list-of-plugins
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeWrapAll from 'rehype-wrap-all';
// import { h } from 'hastscript';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		vitePreprocess({
			preserve: ['ld+json']
		}),
		mdsvex({
			extensions: ['.svx', '.md'],
			rehypePlugins: [
				[rehypeSlug],
				[rehypeAutolinkHeadings,
					{
						behavior: 'append',
						properties: {
							class: 'text-sm',
							style: 'text-decoration:none',
							ariaHidden: true,
							tabIndex: -1
						}
						// content(node) {
						// behavior가 prepend, append일 때만 동작
						// return [h('span', { class: 'prose-title' }, '🔗')];
						// return [s(node., { class: 'prose-title-link-icon' }, '🔗')]
						// }
						// group(node) { // behavior가 before, after일 때만 동작
						// 	console.log(node);
						// 	return h('span', { class: 'relative' }, '🔗')
						// }
					}],
				[rehypeWrapAll, {
					selector: 'table',
					wrapper: 'div.overflow-x-auto'
				}]
			]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
