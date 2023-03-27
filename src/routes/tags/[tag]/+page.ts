// get type svelte event
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
    console.log(params)
	const res = await fetch('/api/tags/' + params.tag);
	const posts = await res.json();
	return {
		posts
	};
};
