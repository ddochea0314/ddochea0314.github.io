import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { SeriesPost } from '$lib';

export const load = (async ({ params: { slug } }) => {
    try {
        const post = await import(`../docs/${slug}.md`);
        if(!post) throw error(404, 'Not found');

        return {
            post : <SeriesPost> {
                title: post.metadata.title,
                description: post.metadata.description,
                date: post.metadata.date,
                tags: post.metadata.tags,
                content: post.default,
                prev: post.metadata?.prev,
                next: post.metadata?.next,
                path: slug,
            } 
        };
    }
    catch (e : any) {
        if (e.message.includes('Unknown variable dynamic import')) {
			throw error(404, 'Not found');
		} else {
			throw error(500, e.message);
		}
    }
    
}) satisfies PageLoad;