import { json, type RequestHandler } from '@sveltejs/kit';
import { getPosts } from '$lib';

export const GET: RequestHandler = async () => {
	const result = await getPosts();
	return json(result);
};
