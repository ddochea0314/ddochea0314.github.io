//@ts-nocheck
import { error, type PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../docs/${params.slug}.md`);
		const { title, date } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date
		};
	} catch (e) {
		if (e.message.includes('Unknown variable dynamic import')) {
			throw error(404, 'Not found');
		} else {
			throw error(500, e.message);
		}
	}
};
