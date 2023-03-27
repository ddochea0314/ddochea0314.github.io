//@ts-nocheck
import { error, type PageLoad } from '@sveltejs/kit';

export const load: PageLoad<Post> = async ({ params }) => {
	try {
		const post = await import(`../docs/${params.slug}.md`);
		const { title, date, description, tags } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			description,
			date,
			tags
		};
	} catch (e) {
		if (e.message.includes('Unknown variable dynamic import')) {
			throw error(404, 'Not found');
		} else {
			throw error(500, e.message);
		}
	}
};
