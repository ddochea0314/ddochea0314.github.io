import { json, type RequestHandler } from '@sveltejs/kit';
import { getPosts } from '$lib';

export const GET: RequestHandler = async ({ params }) => {
	const result = await getPosts(p => p.tags.includes(params['tag'] ?? ''));
	return json(result);
};
