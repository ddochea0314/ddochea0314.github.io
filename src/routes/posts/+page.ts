// get type svelte event
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const res = await fetch('/api/posts');
	const posts = await res.json();
	return {
		posts
	};
};
