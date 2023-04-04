import { json, type RequestHandler } from '@sveltejs/kit';
import { getPosts } from '$lib';

// adapter-static 에서 에러가 나진 않았던 위치였지만, 만일을 위해 추가 처리
export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	const result = await getPosts((p) => p.tags.includes(params['tag'] ?? ''));
	return json(result);
};
