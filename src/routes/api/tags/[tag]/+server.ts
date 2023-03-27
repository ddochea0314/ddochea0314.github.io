import { json, type RequestHandler } from '@sveltejs/kit';
import type { Post } from '$lib';

export const GET: RequestHandler = async ({ params }) => {
	const allPostFiles = import.meta.glob<Post>('/src/routes/posts/docs/*.md'); // vite 지원기능
	const iterables = Object.entries(allPostFiles);

	const allPosts = await Promise.all<Post>(
		iterables.map(async ([path, resolver]: any) => {
			const { metadata } = await resolver();
			const postPath = path.replace('/src/routes/posts/docs/', 'posts/').replace('.md', '');
			return {
				...metadata,
				path: postPath
			};
		})
	);

	return json(
		allPosts.filter(p => p.tags.includes(params['tag'] ?? '')).sort((a, b) => {
			return new Date(b.date).valueOf() - new Date(a.date).valueOf();
		})
	);
};
