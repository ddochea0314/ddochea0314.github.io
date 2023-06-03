// get type svelte event
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
	const res = await fetch('/api/tags/' + encodeURIComponent(params.tag ?? ""));
	const posts = await res.json();
	return {
		posts
	};
};
